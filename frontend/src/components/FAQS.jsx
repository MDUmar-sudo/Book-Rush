import React from "react";
import Header from "./header.jsx";
import Comment from "./comment.jsx";
import CommentGallery from "./CommentGallery.jsx";

function Faqs() { 
    return (
        <div className="faqs">
            <article>
                <Header />
                <h2>About my Summaries</h2>
                <p>At <a className="link" href="/">Book Rush</a> I have a collection of my summaries from many books that I’ve read since 2015.
                    This page is just to answer some questions about it.</p>
                
                <h3>Summaries doesn’t replace the book</h3>
                <p>My summaries are just some tiny tidbits with no context. <span className="bold"> It’s like reading a punchline without the joke.</span> If you hear an elaborate joke, then the punchline — (“The little piece of rope said, ‘No. I’m a frayed knot!’”) — is all you need to remember the full joke. But if you just hear the punchline, without the joke, it makes no sense. I just save the punchlines to remind myself what I’ve read.</p>
                <p>If you read through a book’s summary and like it, please go read the whole book. It gives so much more context and meaning.</p>

                <h3>“How do you choose the rating?”</h3>
                <p>My 0-10 rating is not just how much I liked the book. It’s how strongly I would recommend it to almost anyone. So I would give a little lower rating to a book I loved about an obscure subject, like the culture of Switzerland, because I wouldn’t recommend it to most people.</p>

                <h3>“Which one should I read?”</h3>
                <p>You can select a book after reading the summary. If you like the summary, then read the book. Though, a word of caution: not always my summaries captures the full extent of the book.</p>

                <h3>"How do you select a book?"</h3>
                <p>I like to keep it simple, I'm never conserned about a specific author or genere. I choose my book according to my mood and situation. </p>

                <hr />
                <p className="para">Go to <a className="link" href="/">Book Rush</a> to browse throug the summaries.</p>
                <div className="comment">
                    <Comment />
                </div>   
                <p className="copyright">© {new Date().getFullYear()} <a className="link" href="https://callmeumar.com/" target="_blank">MD UMAR</a></p>
                <CommentGallery/>
                

            </article>

        </div>
        
    );

};

export default Faqs;