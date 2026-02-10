import saaaImg from "../assets/saaa.jpg";
import tttImg from "../assets/ttt.jpg";
import vmImg from "../assets/vission mission.jpg";
import global from "../assets/global.png"
import v from "../assets/v.jpg"
// New imports for the 4 images
import featureImg1 from "../assets/Financial.jpg";
import featureImg2 from "../assets/Visa Application (1).png";
import featureImg3 from "../assets/Visa Application (2).jpg";
import featureImg4 from "../assets/Visa Application (3).jpg";

export default function AboutUs() {
  return (
    <div className="w-full overflow-hidden bg-[#f5f5f5]">

      {/* ================= HERO ================= */}
      <div className="relative h-[60vh]">
        <img src={saaaImg} className="w-full h-full object-cover" alt="About" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Empowering students to achieve their international education dreams.
            </p>
          </div>
        </div>
      </div>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-3">
          We Handle Everything For You
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover what makes us the best choice for your educational journey
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {[
            { img: featureImg2, title: "Unversity ApplicationHandling", desc: "Professional consultants with years of experience" },
            { img: featureImg4, title: "Mock interview Prepartion", desc: "Connections with universities worldwide" },
            { img: featureImg1, title: "Financial Guidance", desc: "95% visa approval and admission success" },
            { img: featureImg3, title: "Visa Application submission", desc: "Round-the-clock assistance for all your needs" }
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl p-6 text-center
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
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VISION & MISSION SECTION ================= */}
      <section className="relative w-full mt-[-10px]">

        {/* DESKTOP VIEW */}
        <div className="hidden lg:block relative w-full h-[450px] overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <img
            src={global}
            alt="Vision and Mission"
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[70%] h-full object-contain"
          />

          {/* CONTENT OVERLAY */}
          <div className="relative z-10 max-w-7xl mx-auto px-12 mt-[60px]">
            <div className="max-w-xl space-y-8">
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-4 ml-[170px]">

                  Mission
                </h3>
                <p className="text-lg text-white/90 leading-relaxed font-semibold pl-14 ml-[120px]">
                  Our mission is to provide comprehensive guidance and support.
                </p>
              </div>

              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-4 ml-[170px]">

                  Vision
                </h3>
                <p className="text-lg text-white/90 leading-relaxed font-semibold pl-14 ml-[120px]">
                  To be a trusted leader in education <br /> consultancy globally.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Bar (Desktop) */}
          <div className="absolute bottom-10  w-full z-20">
            <div className="max-w-7xl ">
              <div className="grid grid-cols-3  max-w-xl mr-[10px] mb-[20px]">
                <div className="text-center group">
                  <h3 className="text-3xl font-bold text-blue-700 group-hover:scale-110 transition-transform duration-300 ml-[550px]">365+</h3>
                  <p className="text-sm font-bold text-gray-600 mt-2 uppercase tracking-widest ml-[540px]">Students Enrolled</p>
                </div>
                <div className="text-center group">
                  <h3 className="text-3xl font-bold text-blue-700 group-hover:scale-110 transition-transform duration-300 ml-[540px]">2+</h3>
                  <p className="text-sm font-bold text-gray-600 mt-2 uppercase tracking-widest ml-[530px] ">Years Experience</p>
                </div>
                <div className="text-center group">
                  <h3 className="text-3xl font-bold text-blue-700 group-hover:scale-110 transition-transform duration-300 ml-[500px]">78%</h3>
                  <p className="text-sm font-bold text-gray-600 mt-2 uppercase tracking-widest ml-[500px]">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
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
              img: tttImg,
              review: "Professional guidance and friendly support throughout the entire application process."
            },
            {
              name: "Angelini",
              img: saaaImg,
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

    </div>
  );
}