import Login from "./components/Login";
import Register from "./components/Register";
import Home  from "./components/Home";
import Ride from "./components/Ride"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="parallax"> 
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register/>}/> 
      <Route path="/" element={<Home/>}/> 
      <Route path="/ride" element={<Ride/>}/> 
      
    </Routes>
    </div>
      </BrowserRouter>
  );
};

export default App;
