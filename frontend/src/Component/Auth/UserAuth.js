import React from 'react'
import { useState } from "react";
import axios from 'axios'
import './authstyle.css'

export default function UserAuth() {
    const [login,setlogin] = useState(true);
    const[regdata,setRegdata] = useState({
        email:"",
        password:"",
        Name:"",
        field:[],
        Contacts:""
  })
  const[logindata,setLogindata] = useState({
    email:"",
    password:""
  })
  const loginUser =async(e)=>{
    e.preventDefault();
    
    await axios.post("http://localhost:8000/org/login",logindata,{
      headers:{'Content-Type': 'application/json'}
    }
    )
  }
  const handleChangelog =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setLogindata(values => ({...values, [name]: value}))
  }
    const registerUser =async(e)=>{
      e.preventDefault();
      
      await axios.post("http://localhost:8000/user/register",regdata,{
        headers:{'Content-Type': 'application/json'}
      }
      )
    }
    const handleChange =(e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setRegdata(values => ({...values, [name]: value}))
    }
  return (
    <div>
    {login?(
        <div id="register">
        <h3>Login page</h3>
        <form  name="userRegistrationForm" onSubmit={loginUser}  >
        <div className="errorMsg"></div>
        <label>Email ID:</label>
        <input type="text" name="email" value={logindata.email}  onChange={handleChangelog}  />
        <div className="errorMsg"></div>
        <label>Password</label>
        <input type="password" name="password" value={logindata.password} onChange={handleChangelog} />
        <div className="errorMsg"></div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
    ):(
        <div id="register">
        <h3>Registration page</h3>
        <form  name="userRegistrationForm" onSubmit={registerUser}  >
        <label>Name</label>
        <input type="text" name="username"  value={regdata.Name} onChange={handleChange} />
        <div className="errorMsg"></div>
        <label>Email ID:</label>
        <input type="text" name="email" value={regdata.email}  onChange={handleChange}  />
        <div className="errorMsg"></div>
        <label>Password</label>
        <input type="password" name="password" value={regdata.password} onChange={handleChange} />
        <div className="errorMsg"></div>
        <label>Fields</label>
        <input type="text" name="field"  value={regdata.field} onChange={handleChange} />
        <label>Contacts</label>
        <input type="text" name="Contacts"  value={regdata.Contacts} onChange={handleChange} />
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
    )}
     
    </div>
  )
}
