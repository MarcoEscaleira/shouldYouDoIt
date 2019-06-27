import React from 'react';
import { renderWithRouter } from '../../utils/test-utils';
import Header from '../Header';

describe('Header test suite', () => {
  it('Should render Header correctly', () => {
    const { container } = renderWithRouter(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
