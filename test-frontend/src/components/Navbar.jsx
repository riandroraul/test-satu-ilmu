import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar">
      <a href="#" class="navbar-logo">
        Toko<span>Gadget</span>.
      </a>
      <div class="navbar-nav">
        <a href="#home">Home</a>
        <a href="#about">Tentang Kami</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Kontak</a>
      </div>
      <div class="navbar-extra">
        <a href="#" id="search">
          <i data-feather="search"></i>
        </a>
        <a href="#" id="shopping-cart">
          <i data-feather="shopping-cart"></i>
        </a>
        <a href="#" id="hamburger-menu">
          <i data-feather="menu"></i>
        </a>
      </div>
      <div className="tombol">
        <a href="#" className="login">
          Login
        </a>
        <a href="#" className="signup">
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
