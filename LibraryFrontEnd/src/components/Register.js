import React, { useState } from 'react'
import { reguser } from '../services/Apicall'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [user,adduser]=useState({'username':'','password':'','email':'','first_name':'','last_name':''})
  const navigate=useNavigate()
  async function registeruser(event)
  {
    event.preventDefault()
    // console.log(user)
    let res=await reguser(user)
    // console.log(res.data)
    navigate('/')
  }
  return (
    <div>
      <div class="container w-50">

<h2 class="text-center">Register</h2>
    <form onSubmit={registeruser}>
      
  <div class="mb-3">
    <label class="form-label">Username:</label>
    <input type="text" onChange={(event)=>{adduser({...user,'username':event.target.value})}} name="username" class="form-control" ></input>
  </div>
          <div class="mb-3">
    <label class="form-label">Password:</label>
    <input type="password" onChange={(event)=>{adduser({...user,'password':event.target.value})}} name="password" class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Email:</label>
    <input type="email" onChange={(event)=>{adduser({...user,'email':event.target.value})}}  name="email" class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">First Name:</label>
    <input type="text" onChange={(event)=>{adduser({...user,'first_name':event.target.value})}}  name="f" class="form-control" ></input>
  </div>
        <div class="mb-3">
    <label class="form-label">Last Name:</label>
    <input type="text" onChange={(event)=>{adduser({...user,'last_name':event.target.value})}} name="l" class="form-control" ></input>
  </div>
  <input type="submit" class="btn btn-primary" value="submit"></input>
</form>
  </div>
    </div>
  )
}

export default Register