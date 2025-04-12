import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { logoutuser } from '../services/Apicall'
function Navbar({islogin,onLogout}) {
  const [w,setw]=useState()

  const navigate=useNavigate()

  async function logout(){
    let res=await logoutuser()
    console.log(res)
    // console.log('hello')
    if(res.status>199 && res.status<399){
      localStorage.removeItem('token')
      onLogout()
      navigate('/login')
    }

  }


  function input(event){
    setw(event.target.value)
    // console.log(w)
  }


  function searchbook(){
    navigate(`/search?word=${w}`)
  }


  return (
    <div>
<nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand" href="">Library</a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/'>
          <a class="nav-link active" aria-current="page" href="">Home</a></Link>
        </li>
        {islogin &&
        <>
        <li class="nav-item">
        <Link to='/add'>
          <a class="nav-link" href="">Add</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/view'>
          <a class="nav-link" href="">View</a></Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={logout}>Logout</a>
        </li>
        </>
        }

        {!islogin &&
        <>
        <li class="nav-item">
        <Link to='/register'>
          <a class="nav-link" href="">Register</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/login'>
          <a class="nav-link" href="">Login</a></Link>
        </li>
        </>
}
      </ul>
      {islogin &&
      <>
        <input class="form-control me-2" onChange={input} type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-success" onClick={searchbook}>Search</button>
        </>
      }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar