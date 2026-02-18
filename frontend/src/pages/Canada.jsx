import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";
import heroImg from "../assets/canada1.jpg";

/* CANADA IMAGES */
import u1a from "../assets/uni1a.png";
import u1b from "../assets/uni1b.jpg";
import u1c from "../assets/uni1c.jpg";

import u2a from "../assets/uni2a.jpg";
import u2b from "../assets/uni2b.jpg";
import u2c from "../assets/uni2c.jpg";

import u3a from "../assets/uni3a.jpg";
import u3b from "../assets/uni3b.jpg";
import u3c from "../assets/uni3c.jpg";

import u4a from "../assets/uni4a.jpg";
import u4b from "../assets/uni4b.jpg";
import u4c from "../assets/uni4c.jpg";

import u5a from "../assets/uni1a.png";
import u5b from "../assets/uni1b.jpg";
import u5c from "../assets/uni1c.jpg";

import u6a from "../assets/uni2a.jpg";
import u6b from "../assets/uni2b.jpg";
import u6c from "../assets/uni2c.jpg";

/* animation — same as AU/UK */
const imageVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Canada = () => {
  const navigate = useNavigate(); // ✅ useNavigate

  const cards = [
    {
      id: 1,
      title: "UNIVERSITY OF TORONTO",
      desc: `The University of Toronto is Canada’s top-ranked university and a global leader in research and innovation. Located in Ontario, it offers world-class programs in Engineering, Medicine, Business, and Computer Science.`,
      big: u1a,
      small1: u1b,
      small2: u1c,
      reverse: false,
    },
    {
      id: 2,
      title: "UNIVERSITY OF BRITISH COLUMBIA (UBC)",
      desc: `UBC is one of the world’s leading public research universities located in Vancouver. Known for sustainability, technology, and business programs with strong global research impact.`,
      big: u2a,
      small1: u2b,
      small2: u2c,
      reverse: true,
    },
    {
      id: 3,
      title: "MCGILL UNIVERSITY",
      desc: `McGill University in Montreal is internationally recognized for academic excellence and medical research, attracting students from over 150 countries.`,
      big: u3a,
      small1: u3b,
      small2: u3c,
      reverse: false,
    },
    {
      id: 4,
      title: "UNIVERSITY OF ALBERTA",
      desc: `The University of Alberta is known for Engineering, Energy, AI, and Health Sciences with strong research funding and international student support.`,
      big: u4a,
      small1: u4b,
      small2: u4c,
      reverse: true,
    },
    {
      id: 5,
      title: "UNIVERSITY OF WATERLOO",
      desc: `Waterloo is globally famous for Computer Science and Engineering with co-op programs that give real industry work experience.`,
      big: u5a,
      small1: u5b,
      small2: u5c,
      reverse: false,
    },
    {
      id: 6,
      title: "SIMON FRASER UNIVERSITY",
      desc: `SFU is known for innovation, business, and technology programs with strong industry partnerships and research opportunities.`,
      big: u6a,
      small1: u6b,
      small2: u6c,
      reverse: true,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full bg-white font-poppins">
        {/* HERO */}
        <section className="w-full relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImg} alt="Canada" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-900/60 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center min-h-[420px]">
            <div className="text-white max-w-xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Study in <span className="uppercase">CANADA</span>
              </h2>

              <p className="mt-4 text-white/85 text-sm md:text-base leading-relaxed">
                Canada offers world-class education, strong immigration pathways,
                safe cities, and excellent career opportunities for graduates.
              </p>

              {/* ✅ Button navigation */}
              <button
                className="mt-8 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-md font-semibold shadow"
                onClick={() => navigate("/contact")}
              >
                Apply for January 2026
              </button>
            </div>
          </div>
        </section>

        {/* UNIVERSITY SECTIONS */}
        <section className="max-w-7xl mx-auto px-4 py-16 space-y-20">
          {cards.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* IMAGES */}
              <motion.div
                className={item.reverse ? "lg:order-2" : ""}
                variants={imageVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white rounded-xl shadow-md p-3">
                  <img
                    src={item.big}
                    className="w-full h-56 object-cover rounded-lg transition duration-500 hover:scale-105"
                  />

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <img
                      src={item.small1}
                      className="w-full h-32 object-cover rounded-lg transition duration-500 hover:scale-110"
                    />
                    <img
                      src={item.small2}
                      className="w-full h-32 object-cover rounded-lg transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>

              {/* TEXT */}
              <div className={`text-center ${item.reverse ? "lg:order-1" : ""} mt-6 lg:mt-0`}>
                <h3 className="text-xl font-extrabold tracking-wide text-gray-900 mb-3">{item.title}</h3>

                <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                  {item.desc}
                </p>

                <button
                  className="mt-6 bg-indigo-900 hover:bg-indigo-800 text-white px-10 py-3 rounded-md font-semibold shadow"
                  onClick={() => navigate("/contact")}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Canada;