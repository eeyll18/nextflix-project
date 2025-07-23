"use client";
import { useState, useEffect } from "react";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold tracking-wider cursor-pointer">
            NEXTFLIX
          </h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              TV Shows
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              Movies
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition">
              New & Popular
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <FaSearch className="text-white h-5 w-5 cursor-pointer hover:text-gray-300 transition" />
          <FaBell className="text-white h-5 w-5 cursor-pointer hover:text-gray-300 transition" />
          <FaUser className="text-white h-6 w-6 cursor-pointer hover:text-gray-300 transition" />
        </div>
      </div>
    </header>
  );
};

export default Header;
