import React from "react";

const GalleryImage = ({ answer: { img } }) => (
  <li>
    <img src={img} alt="gallery img" className="gallery__showcase__img" />
  </li>
);

export default GalleryImage;
