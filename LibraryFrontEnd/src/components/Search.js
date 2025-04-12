import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { searchbook } from '../services/Apicall'

function Search() {
  const [book,setbook]=useState([])
  const {search}=useLocation()

  const queryParams=new URLSearchParams(search)

  const word=queryParams.get('word')

  console.log(word)

  async function searchbooks(){
    let res=await searchbook(word)
    // console.log(res)
    setbook(res.data)
  }
useEffect(()=>{searchbooks()},[word])
  return (
    <div>
      <h3>Search</h3>
      <div class="container w-75 border bordered-2 border-danger shadow">
        {Array.isArray(book)?
    <table class="table table-bordered table-hover w-75 bg-secondary mx-auto p-3 mt-2">
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Language</th>
            <th>Pages</th>
        </tr>
        {book.map((i)=><tr>
            <td><img src={i.image} height="100px" width="100px"></img></td>
            <td>{i.title}</td>
            <td>{i.author}</td>
            <td>{i.price}</td>
            <td>{i.language}</td>
            <td>{i.pages}</td>
                    </tr>)}
      
    </table>:<h2>No Results found</h2>}
    </div>
    </div>
  )
}

export default Search