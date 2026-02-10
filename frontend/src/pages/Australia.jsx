import React from "react";
import { motion } from "framer-motion";

import heroImg from "../assets/Australia_Sky-background-mockup.png";
import uni1 from "../assets/university1.jpg";
import uni2 from "../assets/university2.jpg";
import uni3 from "../assets/university3.jpg";
import uni4 from "../assets/university4.jpg";
import uni5 from "../assets/university5.jpg";
import uni6 from "../assets/university6.jpg";
import uni7 from "../assets/university7.jpg";
import uni8 from "../assets/university8.jpg";
import uni9 from "../assets/university9.jpg";
import uni10 from "../assets/university10.jpg";
import uni11 from "../assets/university11.jpg";
import uni12 from "../assets/university12.jpg";
import uni13 from "../assets/university13.jpg";
import uni14 from "../assets/university14.jpg";
import uni15 from "../assets/university15.jpg";
import uni16 from "../assets/university16.jpg";
import uni17 from "../assets/university17.jpg";
import uni18 from "../assets/university18.jpg";

/* Animation variant */
const imageVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Australia = () => {
  const cards = [
    {
      id: 1,
      title: "UNIVERSITY OF MELBOURNE",
      desc: `One of Australia’s top-ranked universities, known for excellence in Medicine, Business, Engineering, and Research. Located in Melbourne, a global student-friendly city.`,
      big: uni1,
      small1: uni2,
      small2: uni3,
      reverse: false,
    },
    {
      id: 2,
      title: "THE UNIVERSITY OF SYDNEY",
      desc: `Australia’s oldest university and globally recognized for strong programs in Law, Health Sciences, Engineering, and Arts. Offers world-class campus life and career opportunities.`,
      big: uni4,
      small1: uni5,
      small2: uni6,
      reverse: true,
    },
    {
      id: 3,
      title: "AUSTRALIAN NATIONAL UNIVERSITY (ANU)",
      desc: `A highly prestigious university located in Canberra, known for Research, Political Science, International Relations, Computer Science, and Science programs.`,
      big: uni7,
      small1: uni8,
      small2: uni9,
      reverse: false,
    },
    {
      id: 4,
      title: "UNSW SYDNEY (UNIVERSITY OF NEW SOUTH WALES)",
      desc: `A leading university in Australia, well known for Engineering, Information Technology, Business, and Innovation. Strong industry links and excellent graduate employability.`,
      big: uni10,
      small1: uni11,
      small2: uni12,
      reverse: true,
    },
    {
      id: 5,
      title: "MONASH UNIVERSITY",
      desc: `A top public university in Melbourne, famous for Pharmacy, Medicine, Engineering, Data Science, and Business. Offers diverse international student support and modern facilities.`,
      big: uni13,
      small1: uni14,
      small2: uni15,
      reverse: false,
    },
    {
      id: 6,
      title: "UNIVERSITY OF QUEENSLAND (UQ)",
      desc: `One of Australia’s top research universities, located in Brisbane. Known for Biotechnology, Environmental Science, Engineering, and Business with strong global research impact.`,
      big: uni16,
      small1: uni17,
      small2: uni18,
      reverse: true,
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* HERO SECTION */}
      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Australia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 flex items-center min-h-[400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 w-full">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Study in <span className="uppercase">AUSTRALIA</span>
              </h2>
              <p className="mt-4 text-white/80 max-w-md mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
                Unlock your future with free expert guidance to study in Australia – your path to success starts here!
              </p>
              <button className="mt-8 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-md text-sm font-semibold shadow">
                Apply for January 2026
              </button>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* UNIVERSITY SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 py-14 space-y-20">
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
                  alt="University"
                  className="w-full h-52 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                />
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <img
                    src={item.small1}
                    alt="Campus"
                    className="w-full h-28 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                  />
                  <img
                    src={item.small2}
                    alt="Library"
                    className="w-full h-28 object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>

            {/* TEXT */}
            <div
              className={`text-center ${item.reverse ? "lg:order-1" : ""} mt-6 lg:mt-0`}
            >
              <h3 className="text-xl font-extrabold tracking-wide text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                {item.desc}
              </p>
              <button className="mt-6 bg-blue-900 hover:bg-blue-800 text-white px-10 py-3 rounded-md font-semibold shadow">
                Apply
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Australia;