import React from "react";
import "./header.styles.scss";

const Header = () => (
  <section className="header">
    <a href="/" className="logo-container">
      <span className="logo">Saint Gobain </span>
    </a>
    <section className="options">
      <a href="/home" className="option">
        Home
      </a>
      <a href="/service" className="option">
        Service
      </a>
      <a href="/contact" className="option">
        Contact
      </a>
    </section>
  </section>
);
export default Header;
