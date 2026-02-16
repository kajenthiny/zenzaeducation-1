import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home.jsx";
import Australia from "./pages/Australia.jsx";
import UK from "./pages/UK.jsx";
import Canada from "./pages/Canada.jsx";
import France from "./pages/france.jsx";
import Contact from "./pages/Contact.jsx";
import AboutUs from "./pages/AboutUs.jsx";
function App() {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/france" element={<France />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
