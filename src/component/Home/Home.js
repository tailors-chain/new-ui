import React from "react";
import "../../style/home.css";
import logo from "../../assets/images/tai-logo-b.png";
import backimage from "../../assets/images/vector-creator.png";

const Home = () => {
  return (
    <header className="header">
      <div id="header-logo-container">
        <img id="header-logo" src={logo}></img>
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">Login</li>
          <li className="menu-item">About Us</li>
        </ul>
      </nav>
      <div className="container">
        <section className="hero">
          <div className="hero-container">
            <img src={backimage} />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Home;
