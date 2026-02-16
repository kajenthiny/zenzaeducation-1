import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";   
import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";

const Contact = () => {

  const contactDetails = [
    { name: "Phone", icon: <FaPhoneAlt />, value: "0757960217" },
    { name: "Email", icon: <FaEnvelope />, value: "zenzaindustries@gmail.com" },
    { name: "Facebook", icon: <FaFacebook />, value: "https://www.facebook.com/zenzaedu" },
    { name: "Location", icon: <FaMapMarkerAlt />, value: "98/2 saddanathar Road Nallur Jaffna" },
  ];

  return (
    <>
        <Navbar/>
    <div className="w-full bg-white-5 mt-10 sm:py-14">

      <div className="max-w-7xl mx-auto
                      px-4 sm:px-6 md:px-8
                      grid grid-cols-1 md:grid-cols-2
                      gap-9">

        {/* LEFT FORM */}
        <div className="group border border-blue-100 rounded-2xl p-8
                bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100
                shadow-md hover:shadow-2xl hover:-translate-y-1
                transition-all duration-300
                max-w-lg mx-h-1g">

          <h2 className="text-xl sm:text-2xl md:text-3xl
                 font-semibold text-black-800
                 mb-5 text-center">
            Contact Us
          </h2>

          <form className="space-y-6">
            {[
              "Full Name",
              "Email Address",
              "Address",
              "Phone Number",
              "Qualification",
            ].map((label, i) => (
              <div key={i} className="flex flex-col gap-1">
                <label className="text-sm font-medium text-bluck-700">
                  {label}
                </label>
                <input
                  type="text"
                  className="w-full 
             border border-gray-300
             rounded-lg px-3 py-2
             text-sm
             bg-white text-gray-800
             focus:border-blue-400
             focus:ring-2 focus:ring-blue-200
             outline-none transition"
                />

              </div>
            ))}

            <a
  href="https://wa.me/94757960217?text=Hello!%20I%20want%20to%20register."
  target="_blank"
  rel="noopener noreferrer"
  className="w-full
             bg-[#021b88]
             text-white text-sm font-semibold
             py-2 rounded-lg shadow
             hover:bg-[#02156b]
             transition active:scale-95
             mt-6
             inline-block text-center"
>
  Register Now
</a>

          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="flex flex-col justify-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl
               font-semibold text-gray-800
               mb-4
               text-center
               sm:text-left sm:pl-6
               md:pl-12">
            Get Information
          </h2>

          <p className="text-gray-600 text-sm sm:text-base
              mb-8
              text-center
              sm:text-left sm:pl-6
              md:pl-12">
            Got a question? Send us a message and we'll respond soon.
          </p>

         <div className="grid grid-cols-2 gap-4 mb-6">
  {contactDetails.map((item, i) => {
    // Determine link based on contact type
    let href = "#"; // default

    if (item.name === "Phone") {
      // WhatsApp link
      href = `https://wa.me/94${item.value.slice(1)}?text=Hello! I want to contact you.`;
    } else if (item.name === "Email") {
      href = `mailto:${item.value}`;
    } else if (item.name === "Facebook") {
      href = item.value;
    } else if (item.name === "Address") {
      // Google Maps link
      href = `https://www.google.com/maps/search/${encodeURIComponent(item.value)}`;
    }

    return (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center 
                   bg-white 
                   p-4 
                   rounded-xl 
                   shadow-sm 
                   hover:shadow-md 
                   transition duration-100"
      >
        {/* ICON */}
        <div className="w-10 h-10 flex items-center justify-center
                        bg-[#031d91] text-white text-lg
                        rounded-full mb-2">
          {item.icon}
        </div>

        {/* NAME */}
        <p className="text-gray-900 text-base font-semibold">
          {item.name}
        </p>

        {/* VALUE */}
        <p className="text-gray-400 text-sm text-center">
          {item.value}
        </p>
      </a>
    );
  })}
</div>



          {/* MAP */}
<a
  href="https://www.google.com/maps/search/?api=1&query=98/2%20Saddanathar%20Road%2C%20Nallur%2C%20Jaffna"
  target="_blank"
  rel="noopener noreferrer"
>
  <iframe
    title="map"
    src="https://maps.google.com/maps?q=98/2%20Saddanathar%20Road%2C%20Nallur%2C%20Jaffna&z=17&output=embed"
    className="w-full h-48 sm:h-56 md:h-64 rounded-xl shadow-md"
    loading="lazy"
  ></iframe>
</a>


        </div>

      </div>
    </div>
      <Footer/>
      </>
  );
};

export default Contact;