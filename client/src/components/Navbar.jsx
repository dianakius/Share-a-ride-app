import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./ContextAuth";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    if (localStorage.getItem("token")) {
      if (window.confirm("Are you sure you want to leave us?")) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        alert("Logged out successfully");
      }
    }
  };

  return (
    <nav className="bg-linear-to-r from-gray-900 to-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-white text-2xl font-bold flex items-center space-x-2 hover:text-gray-300 transition-colors"
            onClick={closeMenu}
          >
            <span>Share Ride</span>
            <FontAwesomeIcon icon={faCarSide} />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                onClick={scrollToTop}
              >
                Home
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                    onClick={scrollToTop}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                    onClick={scrollToTop}
                  >
                    Sign up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new"
                    className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                  >
                    Announce your Ride
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link
                to="/contact-Us"
                className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                onClick={scrollToTop}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden bg-gray-800 pb-4 space-y-2">
            <li>
              <Link
                to="/"
                className="block text-white hover:bg-white hover:text-gray-900 transition-colors px-4 py-3"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Home
              </Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block text-white hover:bg-white hover:text-gray-900 transition-colors px-4 py-3"
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block text-white hover:bg-white hover:text-gray-900 transition-colors px-4 py-3"
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                  >
                    Sign up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="block text-white hover:bg-white hover:text-gray-900 transition-colors px-4 py-3"
                    onClick={closeMenu}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="block text-white hover:bg-white hover:text-gray-900 transition-colors px-4 py-3"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new" 
                    className="text-white hover:text-gray-300 transition-colors py-2 border-b-4 border-transparent hover:border-white"
                  >
                    Announce your Ride
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block text-white hover:bg-white hover:text-gray-900 transition-colors px-4 py-3"
                    onClick={() => {
                      handleLogout();
                      closeMenu();
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link
                to="/contact-us"
                className="block text-white hover:bg-white hover:text-gray-900 transition-colors px-4 py-3"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
