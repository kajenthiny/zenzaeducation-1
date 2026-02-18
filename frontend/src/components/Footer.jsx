import React from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
import ScrollToTop from "./ScrollToTop.jsx";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 relative overflow-hidden py-0 md:py-0">
      <ScrollToTop />
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-72 md:h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-72 md:h-72 bg-green-100 rounded-full blur-3xl opacity-30 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-10 md:gap-7 relative z-10">

        {/* Column 1 - Logo & Social */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <img
            src={logo1}
            alt="Zenza Logo"
            className="w-50 md:w-62 mx-auto md:mx-0 mt-5"
          />
          <p className="text-sm text-gray-600 mt-3 md:mt-1 leading-6">
            Your dream of studying in the UK, Canada,<br /> or Australia can become a reality with us.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-5 pl-7">
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-125 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-300 transition-all duration-300"
            >
              <FaFacebookF className="hover:animate-pulse" />
            </a>
            <a
              href="https://wa.me/947XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 hover:scale-125 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-300 transition-all duration-300"
            >
              <FaWhatsapp className="hover:animate-pulse" />
            </a>
            <a
              href="https://www.linkedin.com/company/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 hover:scale-125 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400 transition-all duration-300"
            >
              <FaLinkedinIn className="hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Column 2 - Explore Us */}
        <div className="w-full md:w-1/4 text-center md:text-left mt-5">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 relative inline-block">
            Explore Us
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/aboutus" },
              { name: "Contact Us", path: "/contact" },
            ].map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.path}
                  className="hover:text-blue-600 transition-colors duration-200 inline-block hover:translate-x-2 transition-transform duration-300"
                >
                  {item.name}
                </Link>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-1.5 group-hover:h-1.5 bg-blue-600 rounded-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Opening Hours */}
        <div className="w-full md:w-1/4 text-center md:text-left mt-5">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Opening Hours</h2>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 hover:text-blue-600 hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              Mon - Sat: 9:00 AM - 5:00 PM
            </p>
            <p className="text-sm text-gray-600 hover:text-red-600 hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Sunday - Closed
            </p>
          </div>
        </div>

        {/* Column 4 - Get in Touch */}
        <div className="w-full md:w-1/4 text-center md:text-left mt-4 pl-4">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Get in Touch</h2>
          <div className="space-y-3 text-sm text-gray-600">
            {[
              {
                icon: <MdEmail className="text-[18px] text-blue-600 transition-colors duration-300" />,
                text: "zenzaindustries@gmail.com",
                link: "mailto:zenzaindustries@gmail.com",
                bg: "bg-blue-100",
              },
              {
                icon: <FaPhoneAlt className="text-[18px] text-green-600 transition-colors duration-300" />,
                text: "+94 75 796 0217",
                link: "tel:+94757960217",
                bg: "bg-green-100",
              },
              {
                icon: <MdLocationOn className="text-[18px] text-red-600 transition-colors duration-300" />,
                text: "98/2 Saddanathar Road Nallur Jaffna",
                link: "https://www.google.com/maps/search/?api=1&query=Palali+Road+Kondavil+Junction+Jaffna",
                bg: "bg-red-100",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-all duration-300 justify-center md:justify-start"
              >
                <span className={`w-8 h-8 flex items-center justify-center rounded-full ${item.bg} transition-all duration-300`}>
                  {item.icon}
                </span>
                <span className="leading-5">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-blue-500 py-4 text-center text-sm text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 mt-10 relative overflow-hidden">
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