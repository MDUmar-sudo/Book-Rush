import { useState,useEffect } from 'react'
import Head from './head'
import Sort from './sort'
import Faq from './faq'
import Cards from './cards'
import './App.css'

function App() {

  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState('rating');

  const fetchBooks = async () => {
    try {
      const response = await fetch(`/api/books?sort=${sort}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books data:', error);
    }
  };

  useEffect(() => { fetchBooks(); }, [sort]); //refetch books when sort changes

  return(
    <div>
    <Head />
    <Sort setSort={setSort} />
    <Faq />
      <hr />
      {books.map((book, index) => <Cards
        key={index}
        id={book.code}
        title={book.title}
        writer={book.writer}
        isbn={book.isbn}
        rating={book.rating}
        date={book.date_read}
        image={book.book_image}
        summary={book.summary}
        link={book.buying_link} />)}
  </div >  
  );
};

export default App
