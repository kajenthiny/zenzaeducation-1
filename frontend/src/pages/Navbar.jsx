import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-[999] shadow-sm">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src={logo}
            alt="Zenza Logo"
            className="h-70 sm:h-74 md:h-74 w-auto object-contain hover:scale-105 transition ml-10"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">

          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="hover:text-blue-600 transition">
              About Us
            </Link>
          </li>
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-2 hover:text-blue-600 transition">
              Study Abroad
              <FaChevronDown className="text-sm group-hover:rotate-180 transition" />
            </div>

            {/* Add invisible hover area */}
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
              <div className="bg-white shadow-xl rounded-xl w-52 border border-gray-200 overflow-hidden">

                <Link to="/uk" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">
                  🇬🇧 Study in UK
                </Link>

                <Link to="/canada" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">
                  🇨🇦 Study in Canada
                </Link>

                <Link to="/australia" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">
                  🇦🇺 Study in Australia
                </Link>

                <Link to="/france" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700">
                  🇫🇷 Study in France
                </Link>

              </div>
            </div>
          </li>

          <li className="mr-30">
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-200 shadow-lg  transition-all duration-300 ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}>
        <div className="px-6 py-4 space-y-4 text-gray-700 font-medium grid grid-cols-1">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>


          <div>
            <button
              className="flex items-center justify-between w-full hover:text-blue-600 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Study Abroad
              <FaChevronDown className={`transition ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="mt-2 ml-4 space-y-2 grid grid-cols-1">

                <Link to="/uk" onClick={() => setMenuOpen(false)}>🇬🇧 Study in UK</Link>
                <Link to="/canada" onClick={() => setMenuOpen(false)}>🇨🇦 Study in Canada</Link>
                <Link to="/australia" onClick={() => setMenuOpen(false)}>🇦🇺 Study in Australia</Link>
                <Link to="/france" onClick={() => setMenuOpen(false)}>🇫🇷 Study in France</Link>

              </div>
            )}
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
