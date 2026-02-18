import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";

const Contact = () => {

  const contactDetails = [
    { name: "Phone", icon: <FaPhoneAlt />, value: "0757960217" },
    { name: "Email", icon: <FaEnvelope />, value: "ZenZaindustries@gmail.com" },
    { name: "Facebook", icon: <FaFacebook />, value: "facebook.com/abc" },
    { name: "Location", icon: <FaMapMarkerAlt />, value: "98/2 Saddanthar Road Nallur Jaffna" },
  ];
  

  return (
    <div className="w-full bg-white-50 ">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-9 mt-20 py-10 sm:py-14">

        {/* LEFT FORM */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-lg border border-blue-100 rounded-2xl p-8 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 shadow-xl">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
              Contact Us
            </h2>

            <form className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  pattern="[A-Za-z\s]+"
                  title="Only letters allowed"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  }}
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  pattern="[0-9+]*"
                  title="Only numbers and + allowed"
                  maxLength={15}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9+]/g, "");
                  }}
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>

              {/* Qualification */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Qualification
                </label>
                <input
                  name="qualification"
                  type="text"
                  className="w-full h-11 border border-gray-300 rounded-lg px-4 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>

              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={() => {
                  const name = document.querySelector('input[name="fullName"]').value || "User";
                  const phoneNumber = document.querySelector('input[name="phone"]').value || "94757960217";
                  const message = `Hello, my name is ${name}. I have submitted my contact details via the form!`;
                  const url = `https://wa.me/${phoneNumber.replace(/^\+/, '')}?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
                className="w-full h-12 bg-[#021b88] text-white font-semibold rounded-lg shadow-md hover:bg-[#02156b] transition duration-200"
              >
                Register Now
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 text-center sm:text-left sm:pl-6 md:pl-12">
            Get Information
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-8 text-center sm:text-left sm:pl-6 md:pl-12">
            Got a question? Send us a message and we'll respond soon.
          </p>

<div className="grid grid-cols-2 gap-4 mb-6">
  {contactDetails.map((item, i) => {
    let href = "#";
    if (item.name === "Phone") href = `tel:${item.value}`;
   if (item.name === "Email") href = `mailto:${item.value}`; // Mobile la email app
    if (item.name === "Facebook") href = `https://${item.value}`;
    if (item.name === "Location")
      href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.value)}`;

    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-100"
      >
        <div className="w-10 h-10 flex items-center justify-center bg-[#031d91] text-white text-lg rounded-full mb-2">
          {item.icon}
        </div>
        <p className="text-gray-900 text-base font-semibold">{item.name}</p>
        <p className="text-gray-400 text-sm text-center">{item.value}</p>
      </a>
    );
  })}
</div>

        {/* MAP */}
<iframe
  title="map"
  src={`https://maps.google.com/maps?q=${encodeURIComponent("98/2 Saddanthar Road Nallur Jaffna")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
  className="w-full h-48 sm:h-56 md:h-64 rounded-xl shadow-md"
  loading="lazy"
></iframe>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Contact;