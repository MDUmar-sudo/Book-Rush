import { useState,useEffect } from 'react'
import Head from './head'
import Sort from './sort'
import Faq from './faq'
import Cards from './cards'
import './App.css'

function App() {
  const[msg, setMessage] = useState('')
  const message = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.msg);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => { message(); }, []);

  return(
    <div>
      <p>My message {msg}</p>
    <Head />
    <Sort />
    <Faq />
    <hr />
    <Cards/>
  </div >  
  );
};

export default App
