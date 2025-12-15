import React from 'react';

function HeroSection() {
  const handleClick = () => {
    const searchSection = document.getElementById('search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="flex flex-col justify-center items-center h-screen text-white px-4 pb-10 relative"
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          LET'S RIDE!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          What are you waiting for?
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-4 text-xl font-semibold border-2 border-white rounded bg-transparent text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default HeroSection;