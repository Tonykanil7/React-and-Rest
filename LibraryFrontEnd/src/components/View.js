import React, { useEffect, useState } from 'react'
import { allbookdetails, deletebookdetail } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function View() {
  const [book,setbook]=useState([])

  const navigate=useNavigate()
  function detail(i){
    // console.log(i)
    navigate(`/detail?id=${i}`)
  }

  async function deletebook(i){
      // console.log(i)
      let res=await deletebookdetail(i)
      // console.log(res)
      if(res.status >199 && res.status <399)
      {
      fetchbooks()
    }
    else{
      alert("Can't delete Try again...")
    }
  }

  
  function editbook(i){
    // console.log(i)
    navigate(`/edit?id=${i}`)
  }

  
 async function fetchbooks(){

    let s=await allbookdetails()
    setbook(s.data)
  }

  useEffect(()=>{fetchbooks()},[])
  return (
    <div>
      <h3>View</h3>
      <div class="container w-75 border bordered-2 border-danger shadow">
    <table class="table table-bordered table-hover w-75 bg-secondary mx-auto p-3 mt-2">
        <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Language</th>
            <th>Pages</th>
            <th>Actions</th>
        </tr>
        {book.map((i)=><tr>
            <td><img src={i.image} height="100px" width="100px"></img></td>
            <td>{i.title}</td>
            <td>{i.author}</td>
            <td>{i.price}</td>
            <td>{i.language}</td>
            <td>{i.pages}</td>
            <td><button class='btn btn-light' onClick={()=>detail(i.id)}>Details</button> <button class='btn btn-light' onClick={()=>editbook(i.id)}>Edit</button> <button class='btn btn-light' onClick={()=>deletebook(i.id)}> Delete</button></td>
        </tr>)}
      
    </table>
    </div>
      </div>
  )
}

export default View