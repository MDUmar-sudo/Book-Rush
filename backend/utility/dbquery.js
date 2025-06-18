import pg from "pg";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { DateTime } from "luxon";

// Loading environment variables from .env

dotenv.config({ path: path.resolve('./backend/.env') }); 

// database connection
/* 
const db = new pg.Client({
    user: process.env.LOCAL_DB_USER,
    host: process.env.LOCAL_DB_HOST,
    database: process.env.LOCAL_DB_NAME,
    password: process.env.LOCAL_DB_PASSWORD,
    port: Number(process.env.LOCAL_DB_PORT),
});
 */

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    ssl: {
        require:true
    }
});

db.connect();

// reading books.json

// const books_json = fs.readFileSync(path.join(process.cwd(), "./backend/books.json"), "utf-8"); //for concurrent local deployment
const books_json = fs.readFileSync(path.join(process.cwd(), "./books.json"), "utf-8"); //for local deployment of backend
const book = JSON.parse(books_json);


/* 
    Function to insert images into database
*/

export async function insertImage() {

    const image_path = "C:\\Users\\Assassin\\Pictures\\Screenshots\\Book Cover\\"; //Change as per requirement
    book.book_titles.map((book) => {
        const image = fs.readFileSync(`${image_path}${book}.png`);
        const name = book;

        const query = 'UPDATE books SET book_image = $1 WHERE title = $2 ';
        db.query(query, [image, name]);
        console.log('Image inserted successfully');
    });

}

/* 
    Function to retrieve images from database
*/

export async function retrieveImage() {

    const res = await db.query('SELECT title, book_image FROM books');
    res.rows.map((row) => {
        const imageData = row.book_image;
        const name = row.title;
        fs.writeFileSync(`${name}.jpg`, imageData);
    });


    console.log('Image saved as retrieved_image.jpg');
}

/* 
    Function to sort books based on the sort type
*/

export async function bookSorter(sortType) {

    switch (sortType) {
        case 'rating':
            const queryRating = await db.query('SELECT * FROM books ORDER BY rating DESC');
            return queryRating;
        case 'date':
            const queryDate = await db.query('SELECT * FROM books ORDER BY date_read DESC');
            return queryDate;
        case 'title':
            const queryTitle = await db.query('SELECT * FROM books ORDER BY title ASC');
            return queryTitle;
        default:
            return (await db.query('SELECT * FROM books ORDER BY rating DESC'))
    }

}

/* 
    Function to get the current date in DD-MM-YYYY format
*/

export function getFormattedDate(date) {

    const formattedDate = DateTime.fromJSDate(date, { zone: 'utc' })
                                  .setZone('Asia/Kolkata')
                                  .toFormat('dd-MM-yyyy');
    return formattedDate;

}

/* 
    Function to get all comments from the database
*/

export async function getComments() {
    
    const result = await db.query('SELECT * FROM comments ORDER BY date');
    return result;

}

/* 
    Function to save comments into database
*/

export async function putComments(name,email,comment,date) {

    const result = await db.query("INSERT INTO comments (name,email,comment,date) VALUES ($1,$2,$3,TO_DATE($4,'DD-MM-YYYY')) RETURNING * ",
        [name, email, comment, date]);
    return result;

}