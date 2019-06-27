import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRedux } from '../../utils/test-utils';
import Answer from '../Answer';

describe('Answer test suite', () => {
  const initialState = {
    print: true,
    data: {
      img: 'aGifImg.gif',
      msg: 'do it'
    }
  };

  it('Should render Answer correctly', () => {
    const { container } = renderWithRedux(<Answer />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render Answer with data', () => {
    const { container } = renderWithRedux(<Answer />, initialState);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should clean data after clicking on Clean btn', () => {
    const { container, getByText } = renderWithRedux(<Answer />, initialState);

    expect(container.firstChild).toMatchSnapshot();

    userEvent.click(getByText('Clean'));

    expect(container.firstChild).toMatchSnapshot();
  });
});
