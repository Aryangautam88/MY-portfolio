import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                {/* <span className="dot"></span> */}
                 <h1 >Aryan Gautam</h1>
                <h1></h1>
               
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
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
