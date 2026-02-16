import saaaImg from "../assets/Aboutimage1.jpg";
import tttImg from "../assets/ttt.jpg";
// import vmImg from "../assets/vision&mission.jpg";
import global from "../assets/global.png";
import v from "../assets/ttt.jpg";
import sasa from "../assets/sasa.jpg";
// Feature images
import featureImg1 from "../assets/Financial.jpg";
import featureImg2 from "../assets/Visa Application (1).png";
import featureImg3 from "../assets/Visa Application (2).jpg";
import featureImg4 from "../assets/Visa Application (3).jpg";

import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";
export default function AboutUs() {
  return (
    <div className="w-full overflow-hidden bg-[#f5f5f5]">
      <Navbar />
      {/* ================= HERO ================= */}
      <section className="relative w-full">

        {/* Background Image */}
        <div className="w-full relative">
          <img
            src={saaaImg}
            alt="About"
            className="w-full h-auto md:h-[350px] lg:h-[500px] object-contain md:object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-transparent pointer-events-none"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start
        px-6 sm:px-0 md:px-26 lg:px-60">

            <div className="max-w-xl text-center md:text-left pt-20 md:pt-0 pb-6">

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif">
                About <span className="uppercase">Us</span>
              </h1>

              <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mt-4">
                Guiding students toward global education with <br /> reliable support, expert advice,
                and personalized guidance.
              </p>

            </div>

          </div>
        </div>
      </section>
      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20">
        <div className="px-4 sm:px-6 md:px-0">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-3">
            We Handle Everything <br className="sm:hidden" />
            For <span className="whitespace-nowrap">You</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Discover what makes us the best choice for your educational journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {[
            { img: featureImg2, title: "University Application Handling", desc: "Professional consultants with years of experience" },
            { img: featureImg4, title: "Mock interview Preparation", desc: "Connections with universities worldwide" },
            { img: featureImg1, title: "Financial Guidance", desc: "95% visa approval and admission success" },
            { img: featureImg3, title: "Visa Application submission", desc: "Round-the-clock assistance for all your needs" }
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl p-6 text-center w-full
                shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src={item.img}
                className="h-16 w-16 mx-auto mb-4 rounded-lg object-cover shadow"
                alt={item.title}
              />
              <h3 className="font-bold text-lg mb-2 break-words">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <section className="relative w-full mt-[-10px]">

        {/* DESKTOP VIEW */}
        <div className="hidden lg:block relative w-full h-[400px] md:h-[450px] overflow-hidden">
          <img
            src={global}
            alt="Vision and Mission"
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[0%] md:w-[70%] h-full object-contain"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-12 mt-[60px]">
            <div className="max-w-xl space-y-8">
              {/* Mission & Vision stay same */}
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-4 ml-[170px]">Mission</h3>
                <p className="text-lg text-white/90 leading-relaxed font-semibold pl-14 ml-[120px]">
                  Our mission is to provide comprehensive guidance and support.
                </p>
              </div>
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-4 ml-[170px]">Vision</h3>
                <p className="text-lg text-white/90 leading-relaxed font-semibold pl-14 ml-[120px]">
                  To be a trusted leader in education <br /> consultancy globally.
                </p>
              </div>
            </div>
          </div>

          {/* Responsive Numbers Section */}
          <div className="absolute  w-full   ml-[90px]">
            <div className="max-w-md mx-auto  flex justify-between  gap-8 mt-[60px] md:mt-[35px]">

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                  365+
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-600 mt-1 uppercase tracking-widest">
                  Students Enrolled
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                  2+
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-600 mt-1 uppercase tracking-widest">
                  Years Experience
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
                  78%
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-bold text-gray-600 mt-1 uppercase tracking-widest">
                  Success Rate
                </p>
              </div>

            </div>
          </div>
        </div>


        {/* MOBILE & TABLET VIEW */}
        <div className="lg:hidden px-6">
          <div className="bg-blue-800 text-white w-[85%] mx-auto min-h-[300px] p-8 rounded-xl flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎯</span>
              <h3 className="text-2xl font-bold">Mission</h3>
            </div>
            <p className="leading-relaxed mb-6 pl-8">
              Our mission is to provide comprehensive guidance and support to students seeking education abroad.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">👁️</span>
              <h3 className="text-2xl font-bold">Vision</h3>
            </div>
            <p className="leading-relaxed pl-8">
              To be a trusted leader in education consultancy.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 mt-6 text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-700">365</h3>
              <p className="text-sm text-gray-600">Student Enrolled</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700">2+</h3>
              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700">78%</h3>
              <p className="text-sm text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STUDENT REVIEWS ================= */}
      <section className="py-16 bg-gray-100">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Our Students Review
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Hear from students who achieved success with our guidance
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {[
            {
              name: "Sasa",
              img: sasa,
              review: "Professional guidance and friendly support throughout the entire application process."
            },
            {
              name: "Angelini",
              img: v,
              review: "They helped me get my admission quickly and smoothly, very supportive team!"
            }
          ].map((student, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={student.img} className="h-14 w-14 rounded-full object-cover shadow" alt={student.name} />
                <div>
                  <h4 className="font-bold text-lg">{student.name}</h4>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{student.review}"</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}