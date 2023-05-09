import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title, alter }) => (
  <div style={{ marginBottom: "1rem" }} data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500">
    {
      alter != null ? <p className="p__cormorant-alternative">{title}</p> : <p className="p__cormorant">{title}</p>
    }
    <img src={images.spoon} alt="" className="spoon__img" />
  </div>
);

export default SubHeading;
