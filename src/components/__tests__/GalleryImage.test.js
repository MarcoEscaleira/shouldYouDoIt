import React from 'react';
import GalleryImage from '../GalleryImage';
import { renderWithRedux } from '../../utils/test-utils';

describe('Gallery Image test suite', () => {
  it('Should render Gallery Image correctly', () => {
    const { container } = renderWithRedux(
      <GalleryImage answer={{ img: 'myGif.gif' }} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
