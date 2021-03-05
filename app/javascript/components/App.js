import React, { useState } from 'react';
import Books from './Books';
import axios from 'axios';
import NewForm from './NewForm';

const App = (props) => {
    const [books, setBooks] = useState([])
    
    const handleError = (error) => {
      console.log(error)
      alert('check the console, you have an error')
    }

    const getBooks = async () => {
      let res = await axios.get('/books');
      console.log(res);
      console.log(res.data);
      setBooks(res.data);
    }
    
    const getBook = () => {
       console.log('clicked, TODO: make this work') 
    }

    const addBook = (book) => {
      setBooks([...books, book])
    }

  //   const addBook = async (book) => {
  //     console.log(book)
  //     // want to add to db
  //     try {
  //         let response = await axios.post('/books', { ...book})
  //         //then update UI(need to in app.js)
  //         setItems([response.data, ...books])
  //     }
  //     catch (err) {
  //         handleError(err)
  //     }
  // }

    const deleteBook = (id) => {
      const filteredBooks = books.filter( book => {
        return book.id !== id
      })
      setBooks(filteredBooks)
    }
   
    return (
      <div className="app-container">
        <h1>App Page</h1>
        <button onClick={getBooks}>Get Books From DataBase</button>
        <NewForm addBook={addBook}/>
        <Books books={books} deleteBook={deleteBook}/>
      </div>
    );

}

export default App;