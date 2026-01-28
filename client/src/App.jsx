import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/ContextAuth";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Ride from "./components/Ride";
import Search from "./components/Search";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Support from "./components/Support";
import Safety from "./components/Safety";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop/>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/ride" element={<Ride />} />
              <Route path="/search" element={<Search />} />
              <Route path="/" element={<Home />} />
              <Route path="/howItWorks" element={<HowItWorks />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/support" element={<Support />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/contact-Us" element={<ContactUs />} />
              
              
              {/* Protected Profile Route */}
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                    <AboutUs />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;