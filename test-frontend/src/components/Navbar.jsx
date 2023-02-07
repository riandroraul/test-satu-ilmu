import React from "react";
import { Menu } from "react-feather";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        Toko<span>Gadget</span>.
      </a>
      <div className="navbar-nav">
        <a href="#home">Home</a>
        <a href="#about">Tentang Kami</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Kontak</a>
      </div>
      <div className="tombol">
        <a href="#" className="login">
          Login
        </a>
        <a href="#" className="signup">
          Sign Up
        </a>
      </div>
      <div className="navbar-extra">
        <a href="#menu" id="hamburger-menu">
          <Menu />
        </a>
      </div>
      <Menu />
    </nav>
  );
};

export default Navbar;
