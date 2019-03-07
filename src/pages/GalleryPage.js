import React from 'react';
import GalleryImage from '../components/GalleryImage';
import {API_URL} from "../config";

const DEFAULT_STATE = {
  doIt: [],
  dontDoIt: []
};

class Gallery extends React.Component {
  state = {
    ...DEFAULT_STATE
  };

  componentDidMount() {
    const requestAll = async () => {
      const response = await fetch(`${API_URL}/all`);
      const data = await response.json();
      const doIt = data.filter((answer) => answer.msg === 'do it');
      const dontDoIt = data.filter((answer) => answer.msg === 'don\'t do it');
      this.setState(() => ({ doIt, dontDoIt }));
    };
    requestAll();
  }

  render() {
    return (
      <div className="gallery">
        <h1 className="gallery__title">Gallery</h1>
        
        <div className="gallery__body">
          <div className="gallery__doIt">
            <h1 className="showcase__title">Do It</h1>
            <ul className="gallery__showcase">
              {
                this.state.doIt.map((answer, index) => <GalleryImage key={index} answer={answer} />)
              }
            </ul>
          </div>
          <div className="gallery__dontDoIt">
            <h1 className="showcase__title">Don't Do It</h1>
            <ul className="gallery__showcase">
              {
                this.state.dontDoIt.map((answer, index) => <GalleryImage key={index} answer={answer} />)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;