import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <a href="/sd/" className="brand">
          brand
        </a>
        <a href="/ads/">CSS</a>
        <a href="/ads/">JavaScript</a>
        <a href="/asd/">Python</a>
        <button>Sign up</button>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
