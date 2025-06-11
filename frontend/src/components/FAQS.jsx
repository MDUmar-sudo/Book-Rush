import React from "react";
import Header from "./header";
import Comment from "./comment.jsx";
import CommentGallery from "./comment gallery.jsx";

function FAQs() { 
    return (
        <div>
            <article>
                <Header />
                <h2>About my Summaries</h2>
                <p>At <a href="/">book rush</a> I have a collection of my notes from the 13+ books I’ve read since 2015.
                    This page is just to answer some questions about it.</p>
                
                <h3>Summary doesn’t replace the book</h3>
                <p>My summaries are just some tiny tidbits with no context. It’s like reading a punchline without the joke. If you hear an elaborate joke, then the punchline — (“The little piece of rope said, ‘No. I’m a frayed knot!’”) — is all you need to remember the full joke. But if you just hear the punchline, without the joke, it makes no sense. I just save the punchlines to remind myself what I’ve read.</p>
                <p>If you read through a book’s summary and like the it, please go read the whole book. It gives so much more context and meaning.</p>

                <h3>“How do you choose the rating?”</h3>
                <p>My 0-10 rating is not just how much I liked the book. It’s how strongly I would recommend it to almost anyone. So I would give a little lower rating to a book I loved about an obscure subject, like the culture of Switzerland, because I wouldn’t recommend it to most people.</p>

                <h3>“Which one should I read?”</h3>
                <p>You can select a book after reading the summary. If you like the summary, then read the book. Though, a word of caution: not always my summaries captures the full extent of the book.</p>

                <h3>"How do you select a book?"</h3>
                <p>I like to keep it simple, I'm never conserned about a specific author or genere. I choose my book according to my mood and situation. </p>

                <hr />
                <p>Go to <a href="/">book rush</a> to browse throug the summaries.</p>
                <Comment />

                <CommentGallery/>
                

            </article>

        </div>
        
    );

};

export default FAQs;