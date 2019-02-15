import React from 'react';
import GalleryImage from './GalleryImage';

const DEFAULT_STATE = {
  doIt: [],
  dontDoIt: []
}

class Gallery extends React.Component {
  state = {
    ...DEFAULT_STATE
  }

  componentWillMount() {
    const requestAll = async () => {
      const response = await fetch('https://shouldyoudoit.herokuapp.com/all');
      const data = await response.json();
      const doIt = data.filter((answer) => answer.msg === 'do it');
      const dontDoIt = data.filter((answer) => answer.msg === 'don\'t do it');
      this.setState(() => ({ doIt, dontDoIt }));
    }
    requestAll();
  }

  render() {
    return (
      <div className="gallery">
        <h1 className="gallery__title">Gallery</h1>

        <div className="gallery__doIt">
          <h1 className="showcase__title">Do It</h1>
          <ul className="gallery__showcase">
            {
              this.state.doIt.map((answer, index) => {
                return (
                  <GalleryImage key={index} answer={answer} />
                )
              })
            }
          </ul>
        </div>
        <div className="gallery__dontDoIt">
          <h1 className="showcase__title">Don't Do It</h1>
          <ul className="gallery__showcase">
            {
              this.state.dontDoIt.map((answer, index) => {
                return (
                  <GalleryImage key={index} answer={answer} />
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Gallery;