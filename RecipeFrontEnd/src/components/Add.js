import React, { useState } from 'react'
import { postbookdetails } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Add() {
  const [book,addbook]=useState({'title':'','author':'','pages':'','price':'','language':'','image':null})
  const navigate=useNavigate()
  async function postbook(event){
    event.preventDefault()   //to prevent reloading of page
  //  console.log(book)
  let res=await postbookdetails(book)
  console.log(res)
  navigate('/view')

  }
  return (
    <div>
        <div class="container w-50">

<h2 class="text-center">ADD BOOKS</h2>
    <form onSubmit={postbook}>
      
  <div class="mb-3">
    <label class="form-label">Title:</label>
    <input type="text" onChange={(event)=>{addbook({...book,'title':event.target.value})}} name="title" class="form-control" ></input>
  </div>
          <div class="mb-3">
    <label class="form-label">Author:</label>
    <input type="text" onChange={(event)=>{addbook({...book,'author':event.target.value})}} name="author" class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Price:</label>
    <input type="number" onChange={(event)=>{addbook({...book,'price':event.target.value})}} name="price" class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Pages:</label>
    <input type="number" onChange={(event)=>{addbook({...book,'pages':event.target.value})}} name="pages" class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Language:</label>
    <input type="text" onChange={(event)=>{addbook({...book,'language':event.target.value})}} name="lang" class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Image:</label>
    <input type="file" onChange={(event)=>{addbook({...book,'image':event.target.files[0]})}} name="i" class="form-control" ></input>
  </div>
  <input type="submit" class="btn btn-primary" value="submit"></input>
</form>
  </div>
    </div>
  )
}

export default Add