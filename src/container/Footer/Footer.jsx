import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="contact">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contáctanos</h1>
        <p className="p__opensans">Sector La Gonzalera, vía La Morita, San Antonio De Los Altos</p>
        <p className="p__opensans">+33 123-456-7894</p>
        <p className="p__opensans">+33 456-789-0121</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.footer_logo} alt="footer_logo" />
        <p className="p__opensans">
          "Embark on an extraordinaire palatable journey, where culinary
          excellence awaits"
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: "15px " }}
        />
        <div className="app__footer-links_icons">
          <a href="#" target='_blank'>
            <FiFacebook />
          </a>
          <a href="#" target='_blank'>
            <FiTwitter />
          </a>
          <a href="#" target='_blank'>
            <FiInstagram />
          </a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios</h1>
        <p className="p__opensans">Lunes a Viernes:</p>
        <p className="p__opensans">6:00 AM - 2:00 PM</p>
        <p className="p__opensans">Sábados y Domingos:</p>
        <p className="p__opensans">6:00 AM - 2:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        &copy;{new Date().getFullYear()} Arcanos Lunch
      </p>
    </div>
  </div>
);
export default Footer;
