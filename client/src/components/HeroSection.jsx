import React from 'react';
import Button from './Button';

function HeroSection() {


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
        <Button 
        scrollTo="search"      // ID of the element to scroll to
        buttonStyle="outline"   // Transparent with white border
        buttonSize="large"      // Large size
      >
        GET STARTED
      </Button>
      </div>
    </div>
  );
}

export default HeroSection;