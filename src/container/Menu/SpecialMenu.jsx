import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__bg" id="menu">
    <div className="menu__content">
      <div className="menu__wrapper">
        <SubHeading title="Disfruta todo en un solo sitio" alter={true} />
        <h1 className="headtext__alternative" style={{ marginBottom: "2rem" }}>
          Nuestro Menú
        </h1>
        <Popup
          trigger={<button className="custom__button">Ver Completo</button>}
          modal
        >
          <img src={images.complete_menu} alt="menu" />
        </Popup>
      </div>
    </div>

    <div className="menu__img">
      <img
        src={images.menu}
        alt="menu"
        data-aos="fade-left"
        data-aos-delay="200"
      />
    </div>
  </div>
);

export default SpecialMenu;
