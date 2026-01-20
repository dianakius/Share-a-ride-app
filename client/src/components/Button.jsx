import React from "react";
import { Link } from "react-router-dom";

const STYLES = ["primary", "outline", "test", "search"];
const SIZES = ["medium", "large"];

const Button = ({
  children,
  type = "button",
  onClick,
  buttonStyle = "primary",
  buttonSize = "medium",
  to,
  scrollTo,
  disabled = false,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const styleClasses = {
    primary:
      "bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-100",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900",
    test: "bg-blue-500 text-white border-2 border-blue-500 hover:bg-blue-600",
    search:
      "bg-black text-white border-2 border-black hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed",
  };

  const sizeClasses = {
    medium: "px-5 py-2 text-lg",
    large: "px-8 py-4 text-xl",
  };

  const commonClasses = `
    ${styleClasses[checkButtonStyle]}
    ${sizeClasses[checkButtonSize]}
    rounded
    font-semibold
    transition-all
    duration-300
    transform
    hover:scale-105
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  if (scrollTo) {
    const handleScroll = () => {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <button
        type={type}
        onClick={handleScroll}
        disabled={disabled}
        className={commonClasses}
      >
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className="inline-block">
        <button type="button" disabled={disabled} className={commonClasses}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={commonClasses}
    >
      {children}
    </button>
  );
};

export default Button;
