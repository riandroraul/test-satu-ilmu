import React from "react";
import "../assets/css/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <main className="content">
        <h1 className="title">
          Lorem, ipsum dolor. <span>Ipsum</span>
        </h1>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
          mollitia.
        </p>
        <a href="#" className="beli">
          Beli Sekarang
        </a>
      </main>
    </section>
  );
};

export default Hero;
