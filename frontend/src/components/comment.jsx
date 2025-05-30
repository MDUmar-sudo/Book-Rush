import React from "react";

function Comment(){
    return (
        <div>
            <h1>YOUR THOUGHTS?</h1>
            <h1>PLEAVE A LEAVE REPLY:</h1>
            <form action="/comments" method="POST">
                <label htmlFor="namef">Your Name</label>
                <input type="text" name="name" id="namef" required/>
                <label htmlFor="emailf">Your Email</label>
                <input type="text" name="email" id="emailf" required />
                <label htmlFor="comment">Your Comment</label>
                <textarea name="comment" id="comment" cols={80} rows={10} required></textarea>
                <br />
                <input type="submit" name="submit" value={"Post Comment"}/>
            </form>
        </div>
    );
};

export default Comment;