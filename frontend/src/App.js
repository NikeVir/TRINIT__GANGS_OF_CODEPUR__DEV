import './App.css';
import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Component/Navbar/Navbar';
import Home from './Screens/Home/Home';
import UserContext from './ContextProvider';
import OrgAuth from './Component/Auth/OrgAuth';
function App() {
  const { setSignup,signup} = useContext(UserContext)

  return (
    <div className="App">
      <Navbar/>
      {
        signup?(<OrgAuth/>):(<Home/>)
      }
      
    </div>
  );
}

export default App;
