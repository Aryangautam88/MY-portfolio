import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* ===== Left Logo ===== */}
      <div className="logo">
        <h1>Aryan Gautam</h1>
      </div>

      {/* ===== Right Menu Button ===== */}
      <div className="menu-btn" onClick={toggleMenu}>
        <span>MENU</span>
        <div className="menu-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* ===== Dropdown Menu ===== */}
      <div className={`dropdown ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
      </div>
    </nav>
  );
};

export default Navbar;
