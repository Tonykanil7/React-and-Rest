import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { bookdetails } from '../services/Apicall'

function Detail() {
  const [book,setbook]=useState({})

  const {search}=useLocation()
  // console.log(search)

  const queryParams=new URLSearchParams(search)

  const id=queryParams.get('id')

  // console.log(id)
  async function fetchbooks(){

    let res=await bookdetails(id)
    // console.log(res)
    setbook(res.data)
  }


   useEffect(()=>{fetchbooks()},[])
  return (
    <div>
      <div class='container w-75 border bordered-2 mt-5 bg-secondary'>
      <h3 class='text-center'>Detail</h3>
      <table class="table table-bordered mx-auto">
    <tr>
        <th>Image</th>
        <td><img src={book.image} height="200px" width="200px"></img></td>
    </tr>
    <tr>
        <th>Title</th>
        <td>{book.title}</td>
    </tr>
        <tr>
        <th>Author</th>
        <td>{book.author}</td>
    </tr>
        <tr>
        <th>Language</th>
        <td>{book.language}</td>
    </tr>
        <tr>
        <th>Price</th>
        <td>{book.price}</td>
    </tr>
        <tr>
        <th>Pages</th>
        <td>{book.pages}</td>
    </tr>
</table>
      </div>
      </div>
  )
}

export default Detail