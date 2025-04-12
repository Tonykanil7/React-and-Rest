import React, { useState } from 'react'
import { loginuser } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Login({onLogin}) {
  const[user,loguser]=useState({'username':'','password':''})
  const navigate=useNavigate()


  async function userlogin(event){
    event.preventDefault()
    // console.log(user)

    let res=await loginuser(user)
    // console.log(res.data)
    let d=res.data.token
    localStorage.setItem('token','token '+d)
    console.log(localStorage.getItem('token'))
    onLogin()
    navigate('/')

  }
  return (
    <div>
      <div class="container w-50">

<h2 class="text-center">Register</h2>
    <form onSubmit={userlogin}>
      
  <div class="mb-3">
    <label class="form-label">Username:</label>
    <input type="text" onChange={(event)=>{loguser({...user,'username':event.target.value})}} name="username" class="form-control" ></input>
  </div>
          <div class="mb-3">
    <label class="form-label">Password:</label>
    <input type="password" onChange={(event)=>{loguser({...user,'password':event.target.value})}} name="password" class="form-control" ></input>
  </div>
        
  <input type="submit" class="btn btn-primary" value="submit"></input>
</form>
  </div>
    </div>
  )
}

export default Login