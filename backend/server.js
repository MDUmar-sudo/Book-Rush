import path from "path";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import nodemailer from "nodemailer"
import { encrypt, decrypt } from "./utility/encryption.js"
import { bookSorter, getFormattedDate, getComments,putComments,insertImage,retrieveImage } from "./utility/dbquery.js";

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config({ path: path.resolve('./backend/.env') }); // Loading environment variables from .env


// function to insert image into database

/* 
    insertImage().catch(console.error); 
*/

// function to retrieve image from database

/* 
    retrieveImage().catch(console.error); 
*/


app.get("/", (req, res) => { res.send("SERVER RUNNING...") });

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
                date_read: getFormattedDate(book.date_read),
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
    GET request to fetch all books information from the database
*/

app.get("/comments", async (req, res) => {

    try {

        const result = await getComments();
        const comments = result.rows.map((comment) => {
            return {
                id: comment.id,
                name: comment.name,
                comment: comment.comment,
                date: getFormattedDate(comment.date)
            };

        });
        res.json(comments);

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

        const date = getFormattedDate(new Date())
        const result = await putComments(name, encrypt(email), comment, date);
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
            host: SMTP_HOST,
            port: SMTP_PORT,
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