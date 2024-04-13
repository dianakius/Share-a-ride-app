import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {jwtDecode } from "jwt-decode";

function Navbar() {
    let token;
    let decoded;
    /*if (localStorage.getItem("token")){
        token = localStorage.getItem("token");
        decoded =jwtDecode(token);
        console.log(decoded);
    
    }*/
    token = localStorage.getItem("token");
    console.log(token)
    if (token) {
        decoded =jwtDecode(token);
        console.log(decoded);
    }
function handleLogout() {
    if (localStorage.getItem("token")) {
        if(window.confirm("Are you sure you want to leave us?")) {
        localStorage.removeItem("token");
        alert("Logout");
    }
} else {
    return;
}
}

    return (
        <div className="nav-container"> 
        <div className="logo">
        <a href="/">
            <img src="LogoNew.png" alt="Logo" style={{ width: '300px', height: 'auto' }} />
        </a>
        </div>          
      {token ? (
        <div>
           
    <div className="links"> 
    <Link to="/profile">{decoded.email}</Link>
    <Link to="/about-us">About Us</Link>
    <Link to="/new" >Announce your Ride</Link>    
    <Link onClick={handleLogout} to="/">Logout</Link>
        </div>
        </div>
    ) : (
            <div>
            
    <div className="links">  
        <Link to="/ride">Announce</Link>
        <Link to ="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </div>
        </div>
        )}
     </div>
  
    );
}

export default Navbar;