import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/myImage.png"; // 🖼️ replace with your logo path (put your logo in src/assets folder)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Ravneet Kaur</span>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/experience" onClick={closeMenu}>Experience</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>ContactUs</NavLink>
      </div>

      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
