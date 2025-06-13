import {useState,useEffect} from "react";
import Items from "./items.jsx";

function CommentGallery() {

    const [comments, setComments] = useState([]);

    // GET request is sent to the server side to get comments data
    const fetchComments = async () => {

        try {
            
            const response = await fetch('/api/comments');
            const data = await response.json();
            setComments(data);

        } catch (err) {
            
            console.error("Error fecthing the comments", err);

        }
        
    };

     useEffect(() => { fetchComments(); }, []);

    return (
        <div className="commentList">
            <p>Comments</p>
            <ol>
                {
                    comments.map((comment, index) => <Items
                            key={index}
                            id={comment.id}
                            name={comment.name}
                            comment={comment.comment}
                            date = {comment.date}
                        />
                    )
                }
            </ol>
        </div>
    );
}

export default CommentGallery;