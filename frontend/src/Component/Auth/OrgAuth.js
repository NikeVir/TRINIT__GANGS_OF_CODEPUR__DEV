import React from 'react'
import { useState } from "react";
import axios from 'axios'
import './authstyle.css'
export default function OrgAuth() {
    const [login,setLogin] = useState(true);
    const[regdata,setRegdata] = useState({
        email:"",
        password:"",
        mobnumber:"",
        username:"",
        desc:"",
        intro:"",
        minDonation:"",
        contacts:"",
        field:[]
  })
  const[logindata,setLogindata] = useState({
    email:"",
    password:""
  })
  const loginUser =async(e)=>{
    e.preventDefault();
    
    await axios.post("http://localhost:8000/user/login",logindata,{
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
      
      await axios.post("http://localhost:8000/org/register",regdata,{
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
    <div className='register'>
    
    {login?(<div>
        <div className='loginbox'>
        <h3>Registration page</h3>
        <form  name="userRegistrationForm" onSubmit={registerUser}  >
        <label>Email ID:</label>
        <input type="text" name="email" value={logindata.email}  onChange={handleChangelog}  />
        <div className="errorMsg"></div>
        <label>Password</label>
        <input type="password" name="password" value={logindata.password} onChange={handleChangelog} />
        <div className="errorMsg"></div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    <span>if not registered then <a onClick={()=>setLogin(false)}>Register</a></span>

    </div>
    </div>):(
        <div className="loginbox">
        <h3>Registration page</h3>
        <form  name="userRegistrationForm" onSubmit={registerUser}  >
        <label>Name</label>
        <input type="text" name="username"  value={regdata.username} onChange={handleChange} />
        <div className="errorMsg"></div>
        <label>Email ID:</label>
        <input type="text" name="email" value={regdata.email}  onChange={handleChange}  />
        <div className="errorMsg"></div>
        <label>Password</label>
        <input type="password" name="password" value={regdata.password} onChange={handleChange} />
        <div className="errorMsg"></div>
        <label>Introduction</label>
        <textarea type="text" name="intro" value={regdata.intro} onChange={handleChange} />
        <label>Desciption</label>
        <textarea type="text" name="desc" value={regdata.desc} onChange={handleChange} />
        <label>Field</label>
        <input type="text" name="field" value={regdata.field} onChange={handleChange} />
        <label>Donation Requirements</label>
        <input type="text" name="mindonation" value={regdata.minDonation} onChange={handleChange} />
        <label>Contacts</label>
        <input type="text" name="password" value={regdata.contacts} onChange={handleChange} />
        <input type="submit" className="button"  value="Register"/>

        </form>
    <span>If Already Registered then <a onClick={()=>setLogin(true)}>login</a></span>

    </div>
    )}

     
    </div>
  )
}
