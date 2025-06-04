import fs from "fs";
import path from "path";
import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import nodemailer from "nodemailer"

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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

/* 
async function insertImage() {

    const image_path = "C:\\Users\\Assassin\\Pictures\\Screenshots\\Book Cover\\";
    book.book_titles.map((book) => { 
        const image = fs.readFileSync(`${image_path}${book}.png`); 
        const name = book;

        const query = 'UPDATE books SET book_image = $1 WHERE title = $2 ';
        db.query(query, [image,name]);
        console.log('Image inserted successfully');
    });

}
insertImage().catch(console.error); 
*/

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


/* 
    Function to sort books based on the sort type
*/

async function bookSorter(sortType) {

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
            return ( await db.query('SELECT * FROM books ORDER BY rating DESC'))
    }  

}


/* 
    Function to get the current date in DD-MM-YYYY format
*/

function getCurrentDate(date) {

    const dt = date.toISOString().split('T')[0];
    const [year, month, day] = dt.split('-');
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;

}

app.get("/", (req, res) => { res.send("Hello World") });

/* 
    GET request to fetch all books information from the database
*/

app.get("/books", async (req, res) => {

    const sortType = req.query.sort;
    try {

        const result = await bookSorter(sortType);
        const books = result.rows.map((book) => {
            return {
                code: book.code,
                title: book.title,
                writer: book.writer,
                isbn: book.isbn,
                rating: book.rating,
                date_read: getCurrentDate(book.date_read),
                book_image: book.book_image ? `data:image/png;base64,${book.book_image.toString('base64')}` : null,
                summary: book.summary,
                buying_link: book.buying_link
            };
            
       });
        res.json(books);
        
   } catch (err) {
       console.error('Error fetching books:', err);
       res.status(500).json({ error: 'Internal Server Error' });
    }
    
});

/* 
    POST request which receives comments details and insert into the database
*/

app.post("/comment", async (req, res) => {

    const { name, email, comment } = req.body; 
    try {

        const result = await db.query('INSERT INTO Tcomment (name,email,comment,date) VALUES ($1,$2,$3,$4) RETURNING * ',
                                      [name, email, comment, getCurrentDate(new Date())])
        console.log(result.rows[0]);
        res.status(200).json({ success: true });

    }catch(err){
        
        console.error();
        res.status(500).json({ success: false });
        
    }
    
});

/* 
    POST request which receives senders details and send email to the owner (authenticated user)
*/

app.post("/email", async (req, res) => {

    const { name, email, message } = req.body;
    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_EMAIL_PASSWORD,
            },
        });

        // Wraping in an async IIFE so we can use await.
        (async () => {
            const info = await transporter.sendMail({
                from: '"Book Rush Contact" <hey@callmeumar.com>', // must be a verified sender
                to: "hey@callmeumar.com",
                subject: `New message from ${name}`,
                text: `You got a message from ${name} (${email}):\n\n${message}`,
                html: `<p><strong>From:</strong> ${name} (${email})</p>
                      <p>${message}</p>`,
            });

            console.log("Message sent:", info.messageId);

        })();

        res.status(200).json({ success: true });

    } catch (err) {

        console.error();
        res.status(500).json({ success: false });

    }

});




/* 
    LISTENING TO PORT 3000
*/

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});