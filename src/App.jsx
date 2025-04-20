import React, { useEffect, useState } from "react";
import "./App.css";
import Home1 from "./Pages/Hom1";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router";
import Services from "./Pages/Services";
import Pricing from "./Pages/pricing";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Team from "./Pages/team";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="navbar">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
