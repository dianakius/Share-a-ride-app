import React from "react";
import { Link } from "react-router-dom";

const STYLES = ["primary", "outline", "test"];
const SIZES = ["medium", "large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to = "#search",
  scrollTo = null, // New prop for smooth scrolling
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  
  const styleClasses = {
    primary: "bg-white text-gray-900 border-2 border-white hover:bg-gray-100",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900",
    test: "bg-blue-500 text-white border-2 border-blue-500 hover:bg-blue-600",
  };

  const sizeClasses = {
    medium: "px-5 py-2 text-lg",
    large: "px-8 py-4 text-xl",
  };

  const handleClick = (e) => {
    if (scrollTo) {
      e.preventDefault(); //stop the link from navigating
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (onClick) {
      onClick(e);
    }
      };

       if (scrollTo) {
    return (
      <button
        className={`${styleClasses[checkButtonStyle]} ${sizeClasses[checkButtonSize]} rounded font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105`}
        onClick={handleClick}
        type={type || "button"}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className="inline-block">
      <button
        className={`${styleClasses[checkButtonStyle]} ${sizeClasses[checkButtonSize]} rounded font-semibold cursor-pointer transition-all duration-300 transform hover:scale-105`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;