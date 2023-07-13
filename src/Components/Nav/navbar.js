import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <a href="#" className="text-white font-bold text-lg">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Contact
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-200">
              Login
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
