import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-2">
            Join the Adventure newsletter to receive our best deals!
          </h2>
          <p className="text-gray-400 mb-6">You can unsubscribe at any time.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full sm:flex-1 px-4 py-3 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              // scrollTo="search"
              buttonStyle="outline" // Transparent with white border
              buttonSize="medium" // Large size
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/howItWorks"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact-Us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/support"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/findrides"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Find Rides
                </Link>
              </li>
              <li>
                <Link
                  to="/offerrides"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Offer Rides
                </Link>
              </li>
              <li>
                <Link
                  to="/safety"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold hover:text-gray-300 transition-colors"
            >
              <span>SHARE RIDE</span>
              <FontAwesomeIcon icon={faCarSide} />
            </Link>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">SHARE RIDE © 2024</p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-xl"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
