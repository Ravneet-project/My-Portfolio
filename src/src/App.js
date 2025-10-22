import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />

                                <Route path="/projects" element={<Projects />} />
                               <Route path="/experience" element={<Experience />} />


      </Routes>
    </BrowserRouter>
  );
}
