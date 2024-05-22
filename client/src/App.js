import React, { useState} from "react";
import { Login } from "./components/Login";
import { Signup} from "./components/Signup";
import Home  from "./components/Home";
import Ride from "./components/Ride"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";




function App() {
  const [currentForm, setCurrentForm] = useState('login');
const toggleForm = (formName) => {
  setCurrentForm(formName);
}

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className="App"> 
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>}/> 
      <Route path="/ride" element={<Ride/>}/> 
      <Route path="/" element={<Home/>}/> 
    </Routes>
    </div>
    <Footer/>
      </BrowserRouter>
      </>
  );
};

export default App;
