import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/ContextAuth";
import Navbar from "./components/Navbar";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import Home from "./components/Home";
import Ride from "./components/Ride";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className="App">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/ride" element={<Ride />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;