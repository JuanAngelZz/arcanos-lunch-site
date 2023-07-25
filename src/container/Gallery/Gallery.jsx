import React, { useRef } from "react";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__alternative">Síguenos en nuestras redes</h1>
        <p className="p__opensans upper" style={{ color: "#fff", marginTop: "2rem"}}>
          Ya contamos con más de 20 mil seguidores en nuestra cuenta de
          instagram, apóyanos y comparte nuestras fotos y publicaciones.
        </p>
        <a
          href="https://www.instagram.com/arcanoslunch/"
          className="button__alternative"
          style={{ display: "block", marginTop: "20px" }}
          target='_blank'
        >
          Ver más
        </a>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
              data-aos="zoom-in" data-aos-delay="200"
            >
              <img src={image} alt="publicación arcanos lunch" />
              <a
                href="https://www.instagram.com/arcanoslunch/"
                className="gallery__image-icon"
                target="_blank"
              >
                <BsInstagram />
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
