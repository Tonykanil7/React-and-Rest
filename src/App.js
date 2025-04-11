import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import View from './components/View';
import Edit from './components/Edit';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Add from './components/Add';
import { useEffect, useState } from 'react';


function App() {

  const [islogin,settoken]=useState(false)   //defaul it will set as false

  function setloginstatus(){
    let token=localStorage.getItem('token') 
    console.log(token)                        //check token is in localstorage
    settoken(!(!token))                       //if yes it updates to true , else to false
  }


  useEffect(()=>setloginstatus(),[])      //when app component is first loaded

  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar islogin={islogin} onLogout={setloginstatus}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        <Route path='/detail' element={<Detail/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login onLogin={setloginstatus}/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
