import React from "react";

import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./About.css";

const About = () => (
  <div className="app__bg app__wrapper section__padding" id="about">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.about} alt="local arcanos lunch" data-aos="fade-right" data-aos-delay="200" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="La cuna de la empanada de ASADO NEGRO CON QUESO AMARILLO." alter={true} />
      <h1 className="headtext__alternative">Sobre Nosotros</h1>

      <div className="app__chef-content">
        <p className="p__opensans-alternative">
          ingredients, supporting sustainable farming practices, and delivering
          exceptional quality. We aim to create a memorable dining experience
          with impeccable service and a welcoming atmosphere. We celebrate the
          art of cooking and the joy of sharing a meal, and constantly strive to
          push the boundaries of our craft.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>~ Arcanos Lunch</p>
      </div>
    </div>
  </div>
);

export default About;
