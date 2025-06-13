import React from "react";
import Header from "./header";
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import ClearIcon from '@mui/icons-material/Clear';

function Comment() {

    const [form, setForm] = React.useState({
        name: '',
        email: '',
        comment: ''
    });
    const [status, setStatus] = React.useState("");
    const [isHidden, setHidden] = React.useState(true);

    function handleChange(e) {
        return setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {

        e.preventDefault();
        try {

            const request = await fetch('/api/comment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            if (request.ok) {

                setStatus("Sent");
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setStatus("");
                }, 2000);

            } else {

                setStatus("Failed");
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => {
                    setStatus("");
                }, 2000);

            }
        } catch (err) {
            
            console.error(err);
            setStatus("Error occurred");
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => {
                setStatus("");
            }, 2000);

        }

    };

    return (
        isHidden ? (<div><CommentTwoToneIcon className="commentBtn attention-comment-btn" onClick={ ()=>{setHidden(false)}} /></div>) :(<div className="{`comment-form-container ${!isHidden ? 'show' : ''}`}">
                                        <h1>Share your thoughts?</h1>
                                        <h1>Please leave a reply:</h1>
                                        <ClearIcon className="clear-btn" onClick={ ()=>{setHidden(true)}}/>
                                        <form className="comment-form" onSubmit={handleSubmit}>
                                            <label htmlFor="namef">Your Name</label>
                                            <input onChange={handleChange} type="text" name="name" id="namef" value={form.name} required />
                                            <label htmlFor="emailf">Your Email  <span>for my eyes only!</span></label>
                                            <input onChange={handleChange} type="text" name="email" id="emailf" value={form.email} required />
                                            <label htmlFor="comment">Your Comment</label>
                                            <textarea onChange={handleChange} name="comment" id="commentf" cols={10} rows={5} value={form.comment} required></textarea>
                                            <br />
                                            <input className="submit-btn" type="submit" name="submit" value={"Post Comment"} />
                                            <p>{status}</p>
                                        </form>

                                    </div> )
    );
};

export default Comment;