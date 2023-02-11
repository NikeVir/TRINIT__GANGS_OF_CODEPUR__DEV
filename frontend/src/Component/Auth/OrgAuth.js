import React from 'react'
import { useState } from "react";
import axios from 'axios'
import './authstyle.css'
export default function OrgAuth() {
    const [login,setLogin] = useState(false);
    const[regdata,setRegdata] = useState({
        email:"",
        password:"",
        name:"",
        desc:"",
        intro:"",
        minDonation:"",
        contacts:"",
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
      console.log(regdata)
      
      await axios.post("http://localhost:8000/register",regdata,{
        headers:{'Content-Type': 'application/json'}
      }
      )
    }
    const handleChange =(e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setRegdata(values => ({...values, [name]: value}))
    }
    const handlecheckbox=(e)=>{
        const name = e.target.name;
        if(regdata.field.includes(name)){
          regdata.field = regdata.field.filter(function(item) {
            return item !== name
        })
        console.log(regdata.field)
return
        }
        regdata.field.push(name);
        console.log(regdata.field)
    }
  return (
    <div className='register'>
    
    {login?(<div>
        <div className='loginbox'>
        <h3>LOGIN</h3>
        <form  name="userRegistrationForm" onSubmit={registerUser}  >
        <label>Email ID:</label>
        <input type="text" name="email" value={logindata.email}  onChange={handleChangelog}  />
        <div className="errorMsg"></div>
        <label>Password</label>
        <input type="password" name="password" value={logindata.password} onChange={handleChangelog} />
        <div className="errorMsg"></div>
        <input type="submit" className="button"  value="Register"/>
        </form>
      {/* <span>if have not registered then <a style={{color:"blue"}} onClick={()=>setLogin(false)}>click</a> here to register</span> */}

    </div>
    </div>):(
        <div className="loginbox">
        <h3>Register NGO</h3>
        <form  name="userRegistrationForm" onSubmit={registerUser}  >
        <label>NGO name</label>
        <input type="text" name="name"  value={regdata.name} onChange={handleChange} />
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
        {/* <label>Field</label>
        <label><input type="checkbox" name="Education" value={regdata.field} onChange={handlecheckbox} />Education</label> 
        <label><input type="checkbox" name="Cancer" value={regdata.field} onChange={handlecheckbox} />Cancer</label>
        <label> <input type="checkbox" name="HIV" value={regdata.field} onChange={handlecheckbox} />HIV</label>
        <label><input type="checkbox" name="Disabled" value={regdata.field} onChange={handlecheckbox} />Disabled</label> */}
        <label>Donation Requirements in Rs</label>
        <input type="text" name="minDonation" value={regdata.minDonation} placeholder="Amount rs." onChange={handleChange} />
        <label>Contacts</label>
        <input type="text" name="contacts" value={regdata.contacts} min='10' max={10} onChange={handleChange} />
        <input type="submit" className="button"  value="Register"/>
        </form>
    {/* <span>If Already Registered then <a style={{color:"blue"}} onClick={()=>setLogin(true)}>click</a> here to log in </span> */}

    </div>
    )}

     
    </div>
  )
}
