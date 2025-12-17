import React from "react";
import { Link } from "react-router-dom";

const STYLES = ["primary", "outline", "test", "search"];
const SIZES = ["medium", "large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to = "#search",
  scrollTo = null, // New prop for smooth scrolling to an element ID
  disabled = false, // Add disabled prop
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Style classes - updated 'outline' to match your HeroSection button
  const styleClasses = {
    primary: "bg-white text-gray-900 border-2 border-white hover:bg-gray-100",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900",
    test: "bg-blue-500 text-white border-2 border-blue-500 hover:bg-blue-600",
    search: "bg-black text-white border-2 border-black hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizeClasses = {
    medium: "px-5 py-2 text-lg",
    large: "px-8 py-4 text-xl",
  };

  // Handle smooth scrolling
  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault(); // Prevent default link behavior
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Call the custom onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  // If scrollTo is provided, render a button without Link wrapper
  if (scrollTo) {
    return (
      <button
        className={`${styleClasses[checkButtonStyle]} ${sizeClasses[checkButtonSize]} rounded font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105`}
        onClick={handleClick}
        type={type || "button"}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  // Otherwise, render with Link wrapper for navigation
  return (
    <Link to={to} className="inline-block">
      <button
        className={`${styleClasses[checkButtonStyle]} ${sizeClasses[checkButtonSize]} rounded font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;