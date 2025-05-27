import { useState,useEffect } from 'react'
import Head from './head'
import Sort from './sort'
import Faq from './faq'
import Cards from './cards'
import './App.css'

function App() {

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books data:', error);
    }
  };

  useEffect(() => { fetchBooks(); }, []);

  return(
    <div>
    <Head />
    <Sort />
    <Faq />
      <hr />
      {books.map((book, index) =>  <Cards key={index} id={book.code} title={book.title} writer={book.writer} isbn={book.isbn} rating={ book.rating} date={book.date_read} image={book.book_image} />)}
  </div >  
  );
};

export default App
