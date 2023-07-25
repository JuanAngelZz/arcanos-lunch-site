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
        <p className="p__opensans-alternative upper">
          Contamos con ingredientes que apoyan prácticas agrícolas sostenibles y brindando una calidad excepcional. Nuestro objetivo es crear una experiencia gastronómica memorable con un servicio impecable y un ambiente acogedor. Celebramos el arte de cocinar y la alegría de compartir una comida, y nos esforzamos constantemente por superar los límites de nuestro oficio.
        </p>
      </div>
    </div>
  </div>
);

export default About;
