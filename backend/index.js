import fs from "fs";
import path from "path";
import express from "express";
import pg from "pg";
import dotenv from "dotenv";


const app = express();
const port = 3000;
dotenv.config(); // Load environment variables from .env

// reading books.json

const books_json = fs.readFileSync(path.join(process.cwd(), "../books.json"), "utf-8");
const book = JSON.parse(books_json);

// database connection

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10),
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

}
insertImage().catch(console.error); */

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