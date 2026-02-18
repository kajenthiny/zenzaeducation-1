import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop properly (for iPad / Surface fix)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-[999] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Zenza Logo"
            className="h-9 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-gray-700 font-medium">

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

          {/* Study Abroad */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => isDesktop && setDropdownOpen(true)}
            onMouseLeave={() => isDesktop && setDropdownOpen(false)}
          >
            <div
              className="flex items-center gap-1 hover:text-blue-600 transition"
              onClick={() => !isDesktop && setDropdownOpen(!dropdownOpen)}
            >
              Study Abroad
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown */}
            <div
              className={`absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
                dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
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
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 space-y-4 text-gray-700 font-medium">

          <Link to="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>

          <Link to="/AboutUs" onClick={() => setMenuOpen(false)} className="block">
            About Us
          </Link>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="flex items-center justify-between w-full hover:text-blue-600 transition"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Study Abroad
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                dropdownOpen ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <div className="ml-4 space-y-2">
                <Link to="/uk" onClick={() => setMenuOpen(false)} className="block">
                  🇬🇧 Study in UK
                </Link>
                <Link to="/canada" onClick={() => setMenuOpen(false)} className="block">
                  🇨🇦 Study in Canada
                </Link>
                <Link to="/australia" onClick={() => setMenuOpen(false)} className="block">
                  🇦🇺 Study in Australia
                </Link>
                <Link to="/france" onClick={() => setMenuOpen(false)} className="block">
                  🇫🇷 Study in France
                </Link>
              </div>
            </div>
          </div>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block">
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;