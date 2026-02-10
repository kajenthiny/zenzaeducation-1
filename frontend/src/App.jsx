import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import Australia from "./pages/Australia.jsx";
import UK from "./pages/UK.jsx";
import Canada from "./pages/Canada.jsx";
import France from "./pages/france.jsx";
import Contact from "./pages/Contact.jsx"; // or correct path
import AboutUs from "./pages/AboutUs.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/france" element={<France />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
