import React, { useState, useEffect, useContext } from 'react'
import './Navbar.css'
import UserContext from '../../ContextProvider';
const Navbar = () => {
    const { setSignup,signup} = useContext(UserContext)
    return (

                    <nav className="navbar navbar-expand-lg bg-transparent">
                        <div className="container-fluid col-10 mx-auto">
                            <a className="navbar-brand " href="/">
                                <h2>CrowdHelp</h2>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Donation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Campaign</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Contact</a>
                                    </li>
                                </ul>

                                <div className="button">                                   
                                    <button className='sign-up' onClick={()=>setSignup(true)}>Sign Up</button>
                                </div>
                            </div>
                        </div>

                    </nav>
              
    )
}

export default Navbar