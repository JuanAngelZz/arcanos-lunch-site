import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo" data-aos="zoom-in" data-aos-delay="500">
        <img src={images.logosvg} alt="logotipo arcanos lunch" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Inicio</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Sobre Nosotros</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menú</a>
        </li>
        <li className="p__opensans">
          <a href="#find">Visítanos</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Inicio</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Sobre Nosotros</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#find">Visítanos</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
