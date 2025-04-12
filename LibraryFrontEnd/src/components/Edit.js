import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { bookdetails, editbookdetails } from '../services/Apicall'

function Edit() {
  const [book,addbook]=useState({'title':'','author':'','pages':'','price':'','language':'','image':null})
  const navigate=useNavigate()
  const {search}=useLocation()
  // console.log(search)

  const queryParams=new URLSearchParams(search)

  const id=queryParams.get('id')

  async function editbook(event){
    event.preventDefault()
    // console.log(book)

    const ubook={...book}
    if(typeof book.image=='string'){
      delete ubook.image
    }

    // console.log(ubook)
    let res= await editbookdetails(ubook,id)
    console.log(res.data)
    navigate('/view')
  }

  async function fetchbookdetails(){
  
      let s=await bookdetails(id)
      addbook(s.data)
    
    }

    
  
    useEffect(()=>{fetchbookdetails()},[])


  return (
    <div>
      <h3 class='text-center'>Edit</h3>
      <form onSubmit={editbook}>
      
  <div class="mb-3">
    <label class="form-label">Title:</label>
    <input type="text" onChange={(event)=>{addbook({...book,'title':event.target.value})}} name="title" value={book.title} class="form-control" ></input>
  </div>
          <div class="mb-3">
    <label class="form-label">Author:</label>
    <input type="text" onChange={(event)=>{addbook({...book,'author':event.target.value})}} name="author" value={book.author} class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Price:</label>
    <input type="number" onChange={(event)=>{addbook({...book,'price':event.target.value})}} name="price" value={book.price} class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Pages:</label>
    <input type="number" onChange={(event)=>{addbook({...book,'pages':event.target.value})}} name="pages" value={book.pages} class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Language:</label>
    <input type="text" onChange={(event)=>{addbook({...book,'language':event.target.value})}} name="lang" value={book.language} class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Image:</label>
    <img src={book.image} height='100px' width='100px'></img>
    <input type="file" onChange={(event)=>{addbook({...book,'image':event.target.files[0]})}} name="i" class="form-control" ></input>
  </div>
  <input type="submit" class="btn btn-primary" value="submit"></input>
</form>
      </div>
  )
}

export default Edit