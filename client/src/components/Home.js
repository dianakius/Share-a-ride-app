import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import HeroSection from "./HeroSection";
import Search from "./Search";


function Home() {
    return (
      <>
        <HeroSection />
        <Search id="search" />
      
      </>
    );
  }
  
  export default Home;

