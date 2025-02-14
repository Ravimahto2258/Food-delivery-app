import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.chugli_logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi
            quibusdam perspiciatis alias cumque soluta neque voluptatibus sint
            veniam similique deserunt illum adipisci maxime, esse aspernatur
            quae blanditiis expedita fuga. Quidem reprehenderit aut deserunt.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>HOME</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 8709301177</li>
                <li> ravimahto2258@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
