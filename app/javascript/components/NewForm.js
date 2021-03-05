import React, { useState } from 'react'
 import axios from 'axios'

const NewForm = (props) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const { addBook } = props

  const handleSubmit = async (e) => {
    // debugger;
    e.preventDefault()
    const formObj = {title: title, author: author}
    console.log(formObj)
    let res = await axios.post('/books', formObj);
    
    addBook(res.data)
    setTitle('')
    setAuthor('')
    console.log(res.data)
  }

  // const {addBook, setShowForm, id, title: titleInit, author: authInit, updateBook} = props
  
  // const 
  



  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <p>title</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
      <p>author</p>
      <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
      <button type='submit'>add</button>
    </form>
  )
}

export default NewForm;