import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import Header from "./header";




function Email() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {

        const res = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        
        setStatus("Sent");
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus("");
        }, 2000);

      } else {

        setStatus('Failed');
        setTimeout(() => {
          setStatus("");
        }, 2000);

      }
    } catch (err) {

      console.error(err);
      setStatus('Error occurred.');
      setTimeout(() => {
        setStatus("");
      }, 2000);
      
    }
  };

  return (
    <div>
      <Header />
      
      <h2>CONTACT</h2>
      <h3>REACH OUT AND SAY HELLO</h3>

      <form onSubmit={handleSubmit}>
          <label htmlFor="namef">Your Name</label>
          <input name="name" value={form.name} type="text" id='namef' onChange={handleChange} required />
          <label htmlFor="emailf">Your Email  <span>for my eyes only!</span></label>
          <input name="email" type='text' value={form.email} onChange={handleChange} id="emailf" required />
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id='messagef' value={form.message} onChange={handleChange} cols={80} rows={10} required />
          <button type="submit"><SendIcon/></button>
          <p>{status}</p>
        </form>
      </div>
  );
}

export default Email;
