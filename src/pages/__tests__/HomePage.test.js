import React from 'react';
import HomePage from '../HomePage';
import { renderWithRedux } from '../../utils/test-utils';

describe('Home Page test suite', () => {
  it('Should render Home Page correctly', () => {
    const { container } = renderWithRedux(<HomePage />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render Home Page with an Answer', () => {
    const initialState = {
      print: true,
      data: {
        msg: 'do it',
        img: 'someGif.gif'
      },
      oldTextInput: ''
    };

    const { container } = renderWithRedux(<HomePage />, initialState);

    expect(container.firstChild).toMatchSnapshot();
  });
});
