import React, { useState, useEffect } from 'react';
import GalleryImage from '../components/GalleryImage';
import { API_URL } from '../config';

const Gallery = () => {
  const [doIt, setDoIt] = useState([]);
  const [dontDoIt, setDontDoIt] = useState([]);

  useEffect(() => {
    const requestAll = async () => {
      const response = await fetch(`${API_URL}/all`);
      const data = await response.json();
      const doit = data.filter(answer => answer.msg === 'do it');
      const dontdoit = data.filter(answer => answer.msg === "don't do it");

      setDoIt(doit);
      setDontDoIt(dontdoit);
    };
    requestAll();
  }, []);

  return (
    <div className="gallery">
      <h1 className="gallery__title">Gallery</h1>

      <div className="gallery__body">
        <div className="gallery__doIt">
          <h1 className="showcase__title">Do It</h1>
          <ul className="gallery__showcase">
            {doIt.map((answer, index) => (
              <GalleryImage key={index} answer={answer} />
            ))}
          </ul>
        </div>
        <div className="gallery__dontDoIt">
          <h1 className="showcase__title">Don't Do It</h1>
          <ul className="gallery__showcase">
            {dontDoIt.map((answer, index) => (
              <GalleryImage key={index} answer={answer} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
