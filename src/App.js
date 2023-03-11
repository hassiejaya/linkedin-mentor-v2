
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import AuthCalback from './callback';
//import Loginsubmit from './checkpoint/lg/login-submit';

import './App.css';





function App() {
  useEffect(()=>{
    console.log(window.token);
  },[window.token])
  
  return (
    <div className="App">
     <Navbar/> 
     <div className="content">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route exact path = "/callback" element={<AuthCalback/>}/>
        {/*<Route exact path = "/checkpoint/lg/login-submit" element={<Loginsubmit />}/>*/}
      </Routes>
    </BrowserRouter>
    </div> 
    </div>
   
  );
}

export default App;
