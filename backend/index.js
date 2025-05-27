import fs from "fs";
import path from "path";
import express from "express";
import pg from "pg";
import dotenv from "dotenv";


const app = express();
const port = 3000;
dotenv.config({ path: path.resolve('./backend/.env') }); // Loading environment variables from .env

// reading books.json

const books_json = fs.readFileSync(path.join(process.cwd(), "./books.json"), "utf-8");
const book = JSON.parse(books_json);

// database connection

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});
db.connect();



// function to insert image into database

/* async function insertImage() {

    const image_path = "C:\\Users\\Assassin\\Pictures\\Screenshots\\Book Cover\\";
    book.book_titles.map((book) => { 
        const image = fs.readFileSync(`${image_path}${book}.png`); 
        const name = book;

        const query = 'UPDATE books SET book_image = $1 WHERE title = $2 ';
        db.query(query, [image,name]);
        console.log('Image inserted successfully');
    });

} */
// insertImage().catch(console.error);

// function to retrieve image from database

/* async function retrieveImage() {

    const res = await db.query('SELECT title, book_image FROM books');
    res.rows.map((row) => { 
        const imageData = row.book_image;
        const name = row.title;
        // fs.writeFileSync(`${name}.jpg`, imageData);
    });

    
    console.log('Image saved as retrieved_image.jpg');
}
retrieveImage().catch(console.error); */

app.get("/", (req, res) => { res.send("Hello World") });

/* 
    GET request to fetch all books information from the database
*/

app.get("/books", async (req, res) => {

   try{ const result = await db.query('SELECT * FROM books ORDER BY rating DESC');
    const books = result.rows.map((book) => {
        return {
            code: book.code,
            title: book.title,
            writer: book.writer,
            isbn: book.isbn,
            rating: book.rating,
            date_read: book.date_read,
            book_image: book.book_image ? `data:image/png;base64,${book.book_image.toString('base64')}` : null
        };
    });
    res.json(books);
   } catch (err) {
       console.error('Error fetching books:', err);
       res.status(500).json({ error: 'Internal Server Error' });
    }
    
});

/* 
    LISTENING TO PORT 3000
*/

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});