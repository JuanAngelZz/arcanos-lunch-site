import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title, alter }) => (
  <div style={{ marginBottom: "3rem" }} data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
    {
      alter != null ? <p className="p__cormorant-alternative upper">{title}</p> : <p className="p__cormorant upper">{title}</p>
    }
    <img src={images.spoon} alt="" className="spoon__img" />
  </div>
);

export default SubHeading;
