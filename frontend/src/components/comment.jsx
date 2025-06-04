import React from "react";
import Header from "./header";

function Comment(){

    const [form, setForm] = React.useState({
        name: '',
        email: '',
        comment: ''
    });
    const [status, setStatus] = React.useState("");

    function handleChange(e){
        return setForm({...form,[e.target.name]:e.target.value});
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
        <div>
            <Header/>
            <h1>YOUR THOUGHTS?</h1>
            <h1>PLEAVE A LEAVE REPLY:</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="namef">Your Name</label>
                <input onChange={handleChange} type="text" name="name" id="namef" value={form.name} required/>
                <label htmlFor="emailf">Your Email  <span>for my eyes only!</span></label>
                <input onChange={handleChange} type="text" name="email" id="emailf" value={form.email} required />
                <label htmlFor="comment">Your Comment</label>
                <textarea onChange={handleChange} name="comment" id="commentf" cols={80} rows={10} value={form.comment} required></textarea>
                <br />
                <input type="submit" name="submit" value={"Post Comment"} />
                <p>{ status}</p>
            </form>

        </div>
    );
};

export default Comment;