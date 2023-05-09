import React from "react";
import { SubHeading, MenuItem } from "../../components";

import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Disfruta todo en un sólo sitio" />
      <h1 className="headtext__cormorant">Nuestro Menú</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">EmpanadaS</p>
        <div className="app__specialMenu-menu_items">
          {data.empanadas.map((empanada, index) => (
            <MenuItem
              key={empanada.title + index}
              title={empanada.title}
              price={empanada.price}
              tags={empanada.tags}
            />
          ))}
          <p className="p__cormorant" style={{textAlign: 'center'}}>¡Y más!</p>
        </div>
      </div>

      <div className="app__specialMenu-menu_img" data-aos="flip-left" data-aos-delay="300">
        <img src={images.menu} alt="menu" />
      </div>

      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className="app__specialMenu-menu_heading">BebidaS</p>
        <div className="app__specialMenu-menu_items">
          {data.bebidas.map((bebida, index) => (
            <MenuItem
              key={bebida.title + index}
              title={bebida.title}
              price={bebida.price}
              tags={bebida.tags}
            />
          ))}
          <p className="p__cormorant" style={{textAlign: 'center'}}>¡Y más!</p>
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <a href="#" target="__blank" className="custom__button">
        Ver Completo
      </a>
    </div>
  </div>
);

export default SpecialMenu;
