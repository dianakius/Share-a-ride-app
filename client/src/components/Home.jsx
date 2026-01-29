import React from "react";
import HeroSection from "./HeroSection";
import Search from "./Search";

function Home() {
  return (
    <>
      <HeroSection />
      <div id="search"></div>
      <Search />
    </>
  );
}

export default Home;
