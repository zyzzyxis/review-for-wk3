import React from 'react'
import axios from 'axios'

const Book = (props) => {
  const { title, author, id, deleteBook} = props
  
  
  const deleteHandler = async (id) => {
    let res = await axios.delete(`/books/${id}`)
    deleteBook(res.data.id)
  }

  const editHandler = async () => {
    console.log('this button is meant to edit')
  }

  return (
    <div className="book-container">
      <h1>
        {id}- {title}
       <p> </p>
       <button onClick={() => deleteHandler(id)}>Delete</button>
       <button onClick={() => editHandler(id)}>Edit</button>
      </h1>
      <p>Author: {author}</p>
    </div>
  )
}

export default Book;