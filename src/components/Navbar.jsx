import React, { useState } from "react";
import hat from "../assets/hat.png";
import text from "../assets/textlogo.png";
import logo from '../assets/logo-removebg.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <header
        id="navbar"
        className="bg-light flex justify-between items-center sticky top-0 z-50 shadow-lg"
      >
        {/* Logo Section */}
        <div className="flex items-center ps-5 pt-1">
          <img src={hat} alt="Logo" className="w-18 h-18 -m-2 hidden md:block" />
          <img
            src={text}
            alt="Logo Text"
            className="h-9 ml-[-16px] mt-1 object-contain  hidden md:block"
          />
          <img src={logo} className="w-22 h-22 -m-5 md:hidden"/>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <nav className="hidden md:flex space-x-8 me-10">
          <a className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-gray-900">
            Services
          </a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-14 left-0 w-full bg-blue-3 bg-opacity-50  text-white shadow-lg z-40">
          <div className="flex flex-col">
            <a
              href="#home"
              className="block py-4 px-6 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-4 px-6 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block py-4 px-6 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block py-4 px-6 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Navbar;
