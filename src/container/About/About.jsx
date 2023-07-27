import React from "react";

import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./About.css";

const About = () => (
  <div className="app__bg" id="about">
    <div className="about__img">
      <img
        src={images.about}
        alt="local arcanos lunch"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
    </div>

    <div className="about__content">
      <div className="about__wrapper">
        <SubHeading
          title="La cuna de la empanada de ASADO NEGRO CON QUESO AMARILLO."
          alter={true}
        />
        <h1 className="headtext__alternative">Sobre Nosotros</h1>

        <div className="app__chef-content">
          <p className="p__opensans-alternative">
            Contamos con ingredientes que apoyan prácticas agrícolas sostenibles
            y brindando una calidad excepcional. Nuestro objetivo es crear una
            experiencia gastronómica memorable con un servicio impecable y un
            ambiente acogedor. Celebramos el arte de cocinar y la alegría de
            compartir una comida, y nos esforzamos constantemente por superar
            los límites de nuestro oficio.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
