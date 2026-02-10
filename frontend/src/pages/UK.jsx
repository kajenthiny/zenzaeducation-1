import React from "react";
import { motion } from "framer-motion";

import heroImg from "../assets/london.jpg";

/* UK IMAGES */
import u1a from "../assets/uk1a.jpg";
import u1b from "../assets/uk1b.jpg";
import u1c from "../assets/uk1c.jpg";

import u2a from "../assets/uk2a.jpg";
import u2b from "../assets/uk2b.jpg";
import u2c from "../assets/uk2c.jpg";

import u3a from "../assets/uk3a.jpg";
import u3b from "../assets/uk3b.jpg";
import u3c from "../assets/uk3c.jpg";

/* animation */
const imageVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const UK = () => {
  const cards = [
    {
      id: 1,
      title: "UNIVERSITY OF OXFORD",
      desc: `The University of Oxford is one of the world’s oldest and most prestigious universities, known for academic excellence and research leadership. It offers programs across sciences, engineering, medicine, law, and humanities with a strong tutorial-based teaching model.`,
      big: u1a,
      small1: u1b,
      small2: u1c,
      reverse: false,
    },
    {
      id: 2,
      title: "UNIVERSITY OF CAMBRIDGE",
      desc: `Cambridge is globally recognized for innovation and research excellence. It provides top programs in engineering, computer science, business, medicine, and arts with modern laboratories and personalized supervision systems.`,
      big: u2a,
      small1: u2b,
      small2: u2c,
      reverse: true,
    },
    {
      id: 3,
      title: "IMPERIAL COLLEGE LONDON",
      desc: `Imperial College London specializes in science, engineering, medicine, and business education. It is famous for industry partnerships, AI and data science research, and high graduate employability.`,
      big: u3a,
      small1: u3b,
      small2: u3c,
      reverse: false,
    },
  ];

  return (
    <div className="w-full bg-white font-poppins">
      {/* HERO */}
      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="UK"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-indigo-950/60 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center min-h-[420px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Study in <span className="uppercase">UNITED KINGDOM</span>
              </h2>

              <p className="mt-4 text-white/80 max-w-md text-sm md:text-base leading-relaxed">
                Access world-class universities, globally respected degrees,
                modern research facilities, and strong career pathways in the UK.
              </p>

              <button className="mt-8 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-md font-semibold shadow">
                Apply for September Intake
              </button>
            </div>
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
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-lg transition duration-500 hover:scale-105"
                />

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <img
                    src={item.small1}
                    alt=""
                    className="w-full h-32 object-cover rounded-lg transition duration-500 hover:scale-110"
                  />
                  <img
                    src={item.small2}
                    alt=""
                    className="w-full h-32 object-cover rounded-lg transition duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>

            {/* TEXT */}
            <div
              className={`text-center ${
                item.reverse ? "lg:order-1" : ""
              } mt-6 lg:mt-0`}
            >
              <h3 className="text-xl font-extrabold tracking-wide text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-6 bg-indigo-900 hover:bg-indigo-800 text-white px-10 py-3 rounded-md font-semibold shadow">
                Apply
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default UK;