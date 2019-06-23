import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ answer: { img = '' } }) => (
  <li>
    <img src={img} alt="gallery img" className="gallery__showcase__img" />
  </li>
);

GalleryImage.propTypes = {
  answer: PropTypes.object
};

export default GalleryImage;
