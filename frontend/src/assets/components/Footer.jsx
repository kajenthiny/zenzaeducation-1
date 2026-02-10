import React from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-30 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:justify-between gap-7 relative z-10">
        
        {/* Column 1 */}
        <div className="hover:transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-4 group cursor-pointer">
            <div className="relative">
              <img
                src="/logocap.png"
                alt="Zenza Logo"
                className="w-12 h-12 object-contain transition-all duration-500 group-hover:rotate-[360deg]"
              />
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-blue-700 leading-4 group-hover:text-blue-800 transition-colors duration-300">
                ZENZA <span className="text-green-600 group-hover:text-green-700 transition-colors duration-300">EDUCATION</span>
              </h1>
              <p className="text-[10px] text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                Shaping Your Dreams into Reality
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-5 leading-6 hover:text-gray-800 transition-colors duration-300">
            Your dream of studying in the UK, Canada,<br/> or Australia can become a<br/>
            reality with us.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white cursor-pointer hover:bg-blue-700 hover:scale-125 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300 transition-all duration-300">
              <FaFacebookF className="hover:animate-pulse" />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white cursor-pointer hover:bg-green-600 hover:scale-125 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-300 transition-all duration-300">
              <FaWhatsapp className="hover:animate-pulse" />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white cursor-pointer hover:bg-blue-800 hover:scale-125 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400 transition-all duration-300">
              <FaLinkedinIn className="hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="hover:transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 relative inline-block">
            Explore Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 group-hover:w-full transition-all duration-500"></span>
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="relative group cursor-pointer">
              <span className="hover:text-blue-600 transition-colors duration-200 inline-block hover:translate-x-2 transition-transform duration-300">Home</span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-1.5 group-hover:h-1.5 bg-blue-600 rounded-full transition-all duration-300"></span>
            </li>
            <li className="relative group cursor-pointer">
              <span className="hover:text-blue-600 transition-colors duration-200 inline-block hover:translate-x-2 transition-transform duration-300">About Us</span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-1.5 group-hover:h-1.5 bg-blue-600 rounded-full transition-all duration-300"></span>
            </li>
            <li className="relative group cursor-pointer">
              <span className="hover:text-blue-600 transition-colors duration-200 inline-block hover:translate-x-2 transition-transform duration-300">Contact Us</span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-1.5 group-hover:h-1.5 bg-blue-600 rounded-full transition-all duration-300"></span>
            </li>
            <li className="relative group cursor-pointer">
              <span className="hover:text-blue-600 transition-colors duration-200 inline-block hover:translate-x-2 transition-transform duration-300">Study Abroad</span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-1.5 group-hover:h-1.5 bg-blue-600 rounded-full transition-all duration-300"></span>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="hover:transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Opening Hours
          </h2>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 cursor-pointer group flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full group-hover:animate-ping"></span>
              Mon - Sat: 9:00 AM - 5:00 PM
            </p>
            <p className="text-sm text-gray-600 hover:text-red-600 hover:translate-x-1 transition-all duration-200 cursor-pointer group flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Sunday - Closed
            </p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="hover:transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Get in Touch
          </h2>

          <div className="space-y-3 text-sm text-gray-600">
            <p className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-all duration-300 group hover:translate-x-1">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <MdEmail className="text-lg text-blue-600 group-hover:text-white transition-colors duration-300" />
              </span>
              help@ZENZA.edu.lk
            </p>

            <p className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-all duration-300 group hover:translate-x-1">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <FaPhoneAlt className="text-lg text-green-600 group-hover:text-white transition-colors duration-300" />
              </span>
              +94 77 5198195
            </p>

            <p className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-all duration-300 group hover:translate-x-1">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                <MdLocationOn className="text-xl text-red-600 group-hover:text-white transition-colors duration-300" />
              </span>
              <span className="leading-5">Palali Road, Kondavil Junction, Jaffna</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-blue-500 py-4 text-center text-sm text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer"></div>
        <p className="relative z-10">© 2026 ZENZA Education. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
