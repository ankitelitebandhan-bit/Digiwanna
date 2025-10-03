import React, { useState } from "react";
import logo from "../assets/logo.png"; // Update the path to your logo
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <div className="w-32">
          <img src={logo} alt="Logo" className="object-contain w-full h-full" />
        </div>

        <nav className="hidden md:flex space-x-8 text-gray-700">
          <Link
            to="/"
            className="hover:text-black text-lg font-bold hover:underline underline-offset-8 decoration-2 decoration-black    "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-black text-lg font-bold hover:underline underline-offset-8 decoration-2 decoration-black    "
          >
            About Us
          </Link>
          <Link
            to="/Services"
            className="hover:text-black text-lg font-bold hover:underline underline-offset-8 decoration-2 decoration-black    "
          >
            Services
          </Link>
          <Link
            to="/Ourwork"
            className="hover:text-black text-lg font-bold hover:underline underline-offset-8 decoration-2 decoration-black    "
          >
            Our Work
          </Link>

          {/* <Link
            to="/Pricing"
            className="hover:text-black text-lg font-bold hover:underline underline-offset-8 decoration-2 decoration-black    "
          >
            Pricing
          </Link> */}
          <Link
            to="/career"
            className="hover:text-black text-lg font-bold hover:underline underline-offset-8 decoration-2 decoration-black    "
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="hover:text-black text-lg font-bold hover:underline underline-offset-8 decoration-2 decoration-black    "
          >
            Contact
          </Link>
        </nav>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
            Get Started
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700">
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
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-700 px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-black">
            Home
          </Link>
          <Link to="/about" className="block hover:text-black">
            About Us
          </Link>
          <Link to="/services" className="block hover:text-black">
            Services
          </Link>
          <Link to="/ourwork" className="block hover:text-black">
            Our Work
          </Link>
          {/* <Link to="/Pricing" className="block hover:text-black">
            Pricing
          </Link> */}
          <Link to="/career" className="block hover:text-black">
            Careers
          </Link>
          <Link to="/contact" className="block hover:text-black">
            Contact
          </Link>

          {/* Get Started Button for Mobile */}
          <div className="mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
