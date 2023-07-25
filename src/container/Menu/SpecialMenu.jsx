import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Disfruta todo en un sólo sitio" />
      <h1 className="headtext__alternative">Nuestro Menú</h1>
    </div>

    <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
    </div>

    <div style={{ marginTop: "15px" }}>
      <a href="#" target="__blank" className="custom__button">
        Ver Completo
      </a>
    </div>
  </div>
);

export default SpecialMenu;