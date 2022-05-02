import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-conteiner">
      <div className="icon-container">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
      <span>© Built with love by ABC.</span>
    </div>
  );
};

export default Footer;
