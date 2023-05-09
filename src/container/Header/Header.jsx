import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Cómete un Lunch en" />
      <h1 className="app__header-h1">ArcanoS lunch</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Disfruta del momento con las mejores empanadas de los altos mirandinos.
      </p>
      <a href="#find" className="custom__button">¡Ír ahorA!</a>
    </div>
    <div className="app__wrapper_img" data-aos="fade-left" data-aos-delay="200">
      <img src={images.welcome} alt="bienvenido" />
    </div>
  </div>
);

export default Header;
