import React from 'react';

interface Props {
  answer: {
    img: string
  }
}

const GalleryImage: React.FC<Props> = ({ answer: { img = '' } }) => (
  <li>
    <img src={img} alt="gallery img" className="gallery__showcase__img" />
  </li>
);

export default GalleryImage;
