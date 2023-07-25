import { useState } from "react";
import { images } from "../../constants";
import "./Header.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        <div
          className="app__navbar-logo"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img src={images.logo} alt="logotipo arcanos lunch" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">Inicio</a>
          </li>
          <li className="p__opensans">
            <a href="#about">Nosotros</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menú</a>
          </li>
          <li className="p__opensans">
            <a href="#find">Visítanos</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contácto</a>
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

      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        style={{
          "--swiper-pagination-color": "#000000",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "8px",
          "--swiper-pagination-bottom": "22px",
          "--swiper-navigation-color": "#ffffff"
        }}
        className="app__wrapper"
        id="home"
      >
        <SwiperSlide>
          <h1 className="app__header-h1">Las mejores empanadas del país</h1>
          <a href="#find" className="custom__button">
            Visítanos
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="app__header-h1">Slider 2</h4>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="app__header-h1">Slider 3</h4>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
