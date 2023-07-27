import React from "react";

import { SubHeading } from "../../components";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="find">
    <div className="app__wrapper_info">
      <SubHeading title="¡Encuéntranos!" alter={true} />
      <h1 className="headtext__alternative" style={{ marginBottom: "2rem" }}>
        Dirección
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans-alternative">
          Sector La Gonzalera, vía La Morita, San Antonio De Los Altos, Miranda,
          Venezuela, 1204
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#222", margin: "2rem 0" }}
        >
          Horarios
        </p>
        <p className="p__opensans-alternative">
          Lunes - Viernes: 6:00 AM - 2:00 PM
        </p>
        <p className="p__opensans-alternative">
          Sábado - Domingo: 6:00 AM - 2:00 PM
        </p>
      </div>
    </div>
    <div className="app__wrapper_img">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.0914645071387!2d-66.96265586844481!3d10.37378378683194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af37d1f533097%3A0x8c25ffb09187c274!2sArcanos%20Lunch!5e0!3m2!1ses!2sve!4v1683596095345!5m2!1ses!2sve"
        width="555"
        height="555"
        style={{ border: "10px solid var(--color-orange)" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        data-aos="fade-left"
        data-aos-delay="200"
      ></iframe>
    </div>
  </div>
);

export default FindUs;
