import React, { useState, useEffect, useRef } from "react";

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";


// Import images from assets
import heroImage from '../assets/hero3.png';
import rhombus from '../assets/rhombus.png';
import d1 from '../assets/d1.jpg';
import d2 from '../assets/d2.jpg';
import d3 from '../assets/d3.jpg';
import d4 from '../assets/d4.jpg';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import { useNavigate } from "react-router-dom";


import Navbar from "../pages/Navbar";
import Footer from "../components/Footer";

const ZenzaEducation = () => {
  /* ================= STATE & REFS ================= */
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});
  const navigate = useNavigate();


  /* ================= TESTIMONIAL PAGINATION ================= */
  const testimonials = [
    t1, t2, t3, t4,
    t4, t1, t2, t3,
    t1, t2, t3, t4,
    t4, t1, t2, t3
  ];

  const IMAGES_PER_PAGE = 4;
  const totalPages = Math.ceil(testimonials.length / IMAGES_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * IMAGES_PER_PAGE;
  const currentImages = testimonials.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  const [partners, setPartners] = useState(0);
  const [countries, setCountries] = useState(0);
  const [students, setStudents] = useState(0);
  const [heroUniversities, setHeroUniversities] = useState(0);
  const [heroSuccessRate, setHeroSuccessRate] = useState(0);
  const [heroCountries, setHeroCountries] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const animateValue = (target, setter, duration) => {
      let startTime = null;
      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setter(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    // Hero stats animate on mount
    animateValue(50, setHeroUniversities, 1500);
    animateValue(95, setHeroSuccessRate, 1500);
    animateValue(25, setHeroCountries, 1500);

    // Stats section animates when visible
    if (isVisible.stats && !hasAnimated) {
      setHasAnimated(true);
      animateValue(500, setPartners, 2000);
      animateValue(6, setCountries, 2000);
      animateValue(300, setStudents, 2000);
    }
  }, [isVisible.stats, hasAnimated]);

  /* ================= SCROLL EFFECTS ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    const observers = [];

    Object.keys(sectionRefs.current).forEach(key => {
      const element = sectionRefs.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1, rootMargin: '50px' }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  /* ================= AUTO PAGINATION ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:min-h-[85vh] lg:min-h-screen bg-gradient-to-br from-[#031d91] via-[#0425b5] to-[#052ec9] overflow-hidden flex items-center">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Floating Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* Graduation Cap */}
          <div className="absolute top-[5%] sm:top-[10%] md:top-[12%] lg:top-[15%] left-[40%] sm:left-[45%] md:left-[50%] lg:left-[55%] animate-float hidden md:block">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 xl:w-16 text-white/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>

          {/* Globe Icon */}
          <div className="absolute bottom-[5%] sm:bottom-[8%] md:bottom-[10%] lg:bottom-[12%] left-[8%] sm:left-[12%] md:left-[14%] lg:left-[16%] animate-float-delayed">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 lg:w-16 xl:w-20 text-white/15" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>

        </div>

        {/* Diagonal Background Shape */}
        <img
          src={rhombus}
          alt="bg-shape"
          className="hidden lg:block absolute right-[-10%] xl:right-[-15%] bottom-0 h-full max-w-[60%] xl:max-w-[90%] max-h-[1000px] object-contain z-0 pointer-events-none pr-20"
        />

        {/* Hero Image ONLY FOR DESKTOPS */}
        <img
          src={heroImage}
          alt="Hero"
          className="hidden lg:block absolute bottom-0 right-0 h-[70%] xl:h-[80%] object-contain max-w-[50%] xl:max-w-[85%] z-10 pointer-events-none"
        />

        {/* CONTENT WRAPPER */}
        <div className="relative z-20 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 lg:py-14 flex flex-col justify-center">
          <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-white">

            {/* BADGE */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 mb-4">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap">Trusted by 10,000+ Students</span>
            </div>

            {/* FLAGS */}
            <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 xl:gap-6 mb-6 justify-start">
              {[d1, d2, d3, d4].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[90px] xl:h-[110px] w-auto rounded-lg lg:rounded-xl object-cover shadow-2xl hover:scale-105 transition-all duration-300"
                  alt={`Destination ${idx + 1}`}
                />
              ))}
            </div>

            {/* TEXT */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-3 leading-tight">
              Study Abroad With <br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-blue-100 mb-6 leading-relaxed max-w-lg">
              Explore Global Destinations, Unlock Academic Success, and Shape Your Future With Us.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {/* Universities */}
              <div className="text-center md:text-left bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 mb-1">
                  <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                  </svg>
                  <p className="text-2xl font-bold">{heroUniversities}+</p>
                </div>
                <p className="text-sm text-blue-200">Universities</p>
              </div>
              {/* Success Rate */}
              <div className="text-center md:text-left bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 mb-1">
                  <svg className="w-5 h-5 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <p className="text-2xl font-bold">{heroSuccessRate}%</p>
                </div>
                <p className="text-sm text-blue-200">Success Rate</p>
              </div>
              {/* Countries */}
              <div className="text-center md:text-left bg-white/5 backdrop-blur-sm rounded-md sm:rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2 mb-1">
                  <svg className="w-5 h-5 text-pink-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <p className="text-2xl font-bold">{heroCountries}+</p>
                </div>
                <p className="text-sm text-blue-200">Countries</p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-[#031d91] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 text-base w-full sm:w-auto justify-center"
            >
              Get Started
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

          </div>
        </div>
      </section>




      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section
        ref={el => sectionRefs.current.whyChoose = el}
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>

        <div className="container mx-auto px-4">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center transition-all duration-1000 ${isVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Why Choose <span className="text-blue-600 animate-gradient">Us!</span>
          </h2>

          <p className={`text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-1000 delay-200 ${isVisible.whyChoose ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Your Trusted partner for Visa success, helping you achieve your dreams with Expertise and Dedication.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'lightning', title: '3 years+ Experience', desc: 'Our experience makes us the pioneers of successful visa customers for more than 3+ years!', gradient: 'from-blue-500 to-blue-600' },
              { icon: 'thumbs', title: '99% Success Rate', desc: 'Proven Success — 99% of Our Students Achieve Their Dreams', gradient: 'from-green-500 to-green-600' },
              { icon: 'check', title: 'Trusted by Many', desc: 'Our Commitment and Results Have Earned the Trust of Thousands Worldwide', gradient: 'from-purple-500 to-purple-600' },
              { icon: 'money', title: '100% Free Service', desc: 'Our Services are 100% Free, Helping You Every Step of the Way', gradient: 'from-orange-500 to-orange-600' }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative overflow-hidden group ${isVisible.whyChoose ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >

                {/* ICON BG – ONLY THIS SIZE REDUCED */}
                <div className={`w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-full flex items-center justify-center mb-8 mx-auto -mt-6 border-4 border-white shadow-lg relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-pulse-slow`}>

                  {card.icon === 'lightning' && (
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2.5" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}

                  {card.icon === 'thumbs' && (
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                    </svg>
                  )}

                  {card.icon === 'check' && (
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}

                  {card.icon === 'money' && (
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z" />
                    </svg>
                  )}

                </div>

                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-center text-base leading-relaxed">
                  {card.desc}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= TRUSTED BY STUDENTS SECTION ================= */}
      <section
        ref={el => sectionRefs.current.testimonials = el}
        className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-100 via-gray-100 to-zinc-100 relative overflow-hidden"
      >
        {/* Enhanced animated background with geometric shapes */}
        <div className="absolute inset-0 opacity-10">
          {/* Floating circles */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-slate-400 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-gray-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 md:w-64 md:h-64 bg-zinc-400 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>






        <div className="container mx-auto px-4 relative z-10">
          {/* Premium Badge */}
          <div className={`flex justify-center mb-6 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

            </div>
          </div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-4 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Trusted by <span className="text-slate-700">100s of Students!</span>
          </h2>

          <p className={`text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 md:mb-16 transition-all duration-1000 delay-200 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            100s of students enrolled successfully through our service
          </p>

          {/* Image Grid with enhanced box effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
            {currentImages.map((img, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border-2 border-gray-200 hover:border-slate-400 ..."
                onClick={() => {
                  navigate("/aboutus");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >




                {/* Glowing border on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-500 to-zinc-500 rounded-3xl opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500"></div>

                {/* Top decorative bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-slate-600 to-zinc-600 z-20"></div>

                {/* Success badge */}
                <div className="absolute top-4 right-4 z-30 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  VERIFIED
                </div>

                {/* Image with padding for box effect */}
                <div className="relative p-4">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={img}
                      alt={`Student testimonial ${index + 1}`}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-all duration-700"
                    />





                  </div>
                </div>

                {/* Bottom info card */}
                <div className="px-5 pb-5 pt-2 bg-gradient-to-br from-slate-50 to-gray-50">
                  <div className="flex items-center justify-between mb-2">
                  </div>
                  <p className="text-sm font-semibold text-gray-800">Student Testimonial</p>
                  <p className="text-xs text-gray-500 mt-0.5">University Admission Success</p>



                </div>



                {/* Corner accent with animation */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-slate-300/30 via-gray-300/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mb-16">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentPage(index)}
                className={`rounded-full transition-all duration-500 hover:scale-110 ${currentPage === index
                  ? "w-12 h-3 bg-gradient-to-r from-slate-600 to-zinc-600 shadow-lg"
                  : "w-3 h-3 bg-gray-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>



          {/* ================= STATS SECTION (CLEAN VERSION) ================= */}
          <div
            ref={el => sectionRefs.current.stats = el}
            className={`transition-all duration-700 ${isVisible.stats
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <div className="bg-gradient-to-br from-[#031d91] via-[#0425b5] to-[#052ec9] rounded-3xl px-8 py-14 shadow-2xl relative overflow-hidden">

              {/* Soft glowing background */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">

                {/* Stat 1 */}
                <div className="group">
                  <div className="flex justify-center mb-5">
                    <div className="p-5 bg-white/20 backdrop-blur-md rounded-full shadow-lg group-hover:scale-110 transition-all duration-10">
                      <svg className="w-10 h-10 text-white group-hover:text-cyan-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 3L2 9l10 6 10-6-10-6z M2 9v6l10 6 10-6V9" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-5xl font-extrabold text-white mb-1 tracking-tight">
                    {partners}
                    <span className="text-cyan-300">+</span>
                  </h3>

                  <p className="text-white/80 tracking-wide uppercase text-sm">
                    University Partners
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="group">
                  <div className="flex justify-center mb-5">
                    <div className="p-5 bg-white/20 backdrop-blur-md rounded-full shadow-lg group-hover:scale-110 transition-all duration-10">
                      <svg className="w-10 h-10 text-white group-hover:text-green-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 10c0 5-9 13-9 13S3 15 3 10a9 9 0 1118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-5xl font-extrabold text-white mb-1 tracking-tight">
                    {countries}
                  </h3>

                  <p className="text-white/80 tracking-wide uppercase text-sm">
                    Countries
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="group">
                  <div className="flex justify-center mb-5">
                    <div className="p-5 bg-white/20 backdrop-blur-md rounded-full shadow-lg group-hover:scale-110 transition-all duration-10">
                      <svg className="w-10 h-10 text-white group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-5xl font-extrabold text-white mb-1 tracking-tight">
                    {students}
                    <span className="text-purple-300">+</span>
                  </h3>

                  <p className="text-white/80 tracking-wide uppercase text-sm">
                    Students Placed
                  </p>
                </div>

              </div>
            </div>
          </div>


        </div>
      </section>

      {/* ================= DESTINATIONS SECTION ================= */}
      <section
        ref={el => sectionRefs.current.destinations = el}
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* Animated blobs background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">

          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.destinations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Turn Your Dreams Into a <span className="text-blue-600 animate-gradient">Destination</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore destinations that suit your aspirations and unlock endless possibilities
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {[
              { title: "CANADA", img: d1, desc: "Canada is known for its breathtaking natural beauty, multicultural cities, and high quality of life.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
              { title: "FRANCE", img: d2, desc: "France is a country of timeless elegance, rich heritage, world-class education, and artistic excellence.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
              { title: "AUSTRALIA", img: d3, desc: "Australia offers a unique blend of modern cities, world-class education, and stunning natural landscapes.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
              { title: "UK", img: d4, desc: "The UK is a land of rich history, diverse cultures, and globally respected academic institutions.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" }
            ].map((card, index) => (
              <div
                key={index}
                className={`group h-full transition-all duration-1000 ${isVisible.destinations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col hover:-translate-y-3 relative">

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Image Section */}
                  <div className={`relative h-56 ${card.bg} flex items-center justify-center overflow-hidden`}>
                    {/* Ripple effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="w-44 h-44 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 ring-4 ring-white relative z-10">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 text-center flex flex-col flex-grow relative">
                    <h3 className="text-3xl font-extrabold mb-5 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[96px]">
                      {card.desc}
                    </p>

                    {/* Animated Arrow Button */}
                    {/* Animated Arrow Button */}
                    <div className="flex justify-center mt-auto">
                      <button
                        onClick={() => {
                          // Navigate based on card title
                          switch (card.title) {
                            case "CANADA":
                              navigate("/canada");
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              break;
                            case "FRANCE":
                              navigate("/france");
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              break;
                            case "AUSTRALIA":
                              navigate("/australia");
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              break;
                            case "UK":
                              navigate("/uk");
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              break;
                            default:
                              navigate("/");
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className="group/btn relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center overflow-hidden"
                      >
                        <svg
                          className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>

                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover/btn:opacity-30 group-hover/btn:scale-150 transition-all duration-500"></span>
                      </button>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GLOBAL STYLES ================= */}
      <style jsx>{`
        /* Blob Animation */
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        /* Float Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        /* Fade In Up */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Slide In Left */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Slide In Up */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Fade In Scale */
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Gradient Animation */
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Animation Classes */
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Animation Delays */
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default ZenzaEducation;