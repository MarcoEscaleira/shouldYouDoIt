import React from 'react';
import GalleryPage from '../GalleryPage';
import { renderWithRedux } from '../../utils/test-utils';

describe('Gallery Page test suite', () => {
  it('Should render Gallery Page correctly', () => {
    const { container } = renderWithRedux(<GalleryPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
