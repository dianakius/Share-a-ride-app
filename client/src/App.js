import Login from "./components/Login";
import Register from "./components/Register";
import Blogs  from "./components/Blogs";
import BlogForm from "./components/BlogForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register/>}/> 
      <Route path="/" element={<Blogs />}/> 
      <Route path="/newBlog" element={<BlogForm />}/> 
      
    </Routes>
    <Login />
    <Register />
  </BrowserRouter>
  );
};

export default App;
