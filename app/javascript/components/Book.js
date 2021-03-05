import React from 'react'
import axios from 'axios'

const Book = (props) => {
  const { title, author, id, deleteBook} = props
  // const [showForm, setShowForm] = useState(false)
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')

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
        {id} - {title}
        </h1>
       <p> </p>
       <p>Author: {author}</p>
       <button onClick={() => deleteHandler(id)}>Delete</button>
       <button onClick={() => editHandler(id)}>Edit</button>
      {/* want form to show up under each book 
      need it to link to the id to make sure to change the right thing */}
      <form /*style={{display: "none"}} */onSubmit={editHandler}>
        <p>Title</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <p>Author</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default Book;