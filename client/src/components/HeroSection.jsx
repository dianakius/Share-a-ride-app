import React from 'react';

function HeroSection() {
  const handleClick = () => {
    const searchSection = document.getElementById('search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-linear-to-br from-yellow-600 to-purple-700 text-white px-4 pb-10">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-4">
        LET'S RIDE!
      </h1>
      <p className="text-xl md:text-2xl text-center mb-8">
        What are you waiting for?
      </p>
      <button
        onClick={handleClick}
        className="px-8 py-4 text-xl font-semibold border-2 border-white rounded bg-transparent text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
      >
        GET STARTED
      </button>
    </div>
  );
}

export default HeroSection;