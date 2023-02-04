import React from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <a href="/html/">brand</a>
        <a href="/css/">CSS</a>
        <a href="/js/">JavaScript</a>
        <a href="/python/">Python</a>
        <button>Sign up</button>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
