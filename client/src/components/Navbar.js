import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {jwtDecode } from "jwt-decode";

function Navbar() {
    let token;
    if (localStorage.getItem("token")){
        token = localStorage.getItem("token");
        decoded =jwtDecode(token);
        console.log(decoded);
    }else {
        return;
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
           
      {token ? (
        <div>
            <div className="logo">
            <h1>BlogApp</h1>
            </div>

    <div className="links"> 
    <Link to="/profile">{decoded.email}</Link>
    <Link to="/">Blogs</Link>
    <Link to="/new" >Post Blog Form</Link>    
    <Link onClick={handleLogout} to="/">Logout</Link>
        </div>
        </div>
    ) : (
            <div>
            <div className="logo">
            <h1>BlogApp</h1>
            </div>
    <div className="links">   
        <Link to="/">Blogs</Link>
        <Link to ="/login">Login</Link>
        <Link to="/signup">Sign</Link>
        </div>
        </div>
        )}
     </div>
  
    );
}

export default Navbar;