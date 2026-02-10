import React from "react";
import banner from "../assets/h.jpg";

const Contact = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* HEADER BANNER */}
      <div
        className="relative h-[220px] sm:h-[320px] md:h-[480px] lg:h-[520px]
                   bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
      <div className="absolute inset-0 bg-black/50
                flex flex-col justify-center items-center
                text-center
                px-4 sm:px-5 md:px-16
                pt-6 sm:pt-10 md:pt-15">

  <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold
                 bg-gradient-to-r from-blue-400 via-white to-blue-600
                 bg-clip-text text-transparent">
    Contact Us
  </h1>

  <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base
                bg-gradient-to-r from-white via-blue-200 to-blue-400
                bg-clip-text text-transparent">
    Home / Contact
  </p>
</div>

      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto
                      px-4 sm:px-6 md:px-8
                      py-10 sm:py-14
                      grid grid-cols-1 md:grid-cols-2
                      gap-6 sm:gap-10 md:gap-25">

        {/* LEFT FORM */}
        <div className="border border-blue-100 rounded-2xl
                        p-5 sm:p-7 md:p-8
                        bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50
                        shadow-md hover:shadow-xl transition">

          <h2 className="text-2xl sm:text-3xl md:text-4xl
                         font-semibold text-blue-800 mb-5 sm:mb-6">
            Contact Us
          </h2>

          <form className="space-y-4 sm:space-y-5">
            {[
              "Full Name",
              "Email Address",
              "Address",
              "Phone Number",
              "Qualification",
            ].map((label, i) => (
              <div key={i} className="flex flex-col gap-1">
                <label className="text-xs sm:text-sm font-medium text-blue-700">
                  {label}
                </label>
                <input
                  type="text"
                  className="w-full border border-blue-300 rounded-lg
                             px-3 sm:px-4 py-2 sm:py-2.5
                             bg-white text-blue-900
                             focus:border-blue-600 focus:ring-4
                             focus:ring-blue-300/40
                             outline-none transition"
                />
              </div>
            ))}

            <button
              type="button"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800
                         text-white text-sm sm:text-base md:text-lg
                         font-semibold
                         py-2.5 sm:py-3.5
                         rounded-lg shadow-lg
                         hover:from-blue-700 hover:to-blue-900
                         transition active:scale-95">
              Register Now
            </button>
          </form>
        </div>

     {/* RIGHT INFO */}
<div className="flex flex-col
                mt-8 md:mt-0
                px-1 sm:px-0">

  <h2 className="mt-2 sm:mt-4
                 text-2xl sm:text-3xl md:text-4xl
                 font-semibold text-blue-800
                 mb-3 sm:mb-4">
    Get Information
  </h2>

  <p className="text-blue-700/80
                text-sm sm:text-base
                mb-5 sm:mb-6">
    Got a question? Send us a message and we'll respond soon.
  </p>

  {/* CONTACT DETAILS */}
  <div className="grid grid-cols-1 sm:grid-cols-2
                  gap-3 sm:gap-4
                  mb-6">

    {[
      { icon: "📞", value: "0771234566" },
      { icon: "✉️", value: "abc@gmail.com" },
      { icon: "🌐", value: "www.abc.com" },
      { icon: "📍", value: "Jaffna" },
    ].map((item, i) => (
      <div key={i}
           className="flex items-center
                      gap-2 sm:gap-3">

        <span className="text-lg sm:text-xl">
          {item.icon}
        </span>

        <p className="text-gray-800
                      text-sm sm:text-base">
          {item.value}
        </p>
      </div>
    ))}
  </div>

  {/* MAP */}
  <iframe
    title="map"
    src="https://maps.google.com/maps?q=Jaffna&t=&z=13&ie=UTF8&iwloc=&output=embed"
    className="w-full
               h-44 sm:h-56 md:h-64
               rounded-xl shadow"
    loading="lazy"
  ></iframe>
</div>

      </div>
    </div>
  );
};

export default Contact;