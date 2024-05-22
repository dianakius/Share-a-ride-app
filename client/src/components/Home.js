import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import HeroSection from "./HeroSection";
import Search from "./Search";


function Home() {
    return (
      <>
        <HeroSection />
      <Search/>
      
      </>
    );
  }
  
  export default Home;

