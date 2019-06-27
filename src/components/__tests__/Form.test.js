import React from 'react';
import userEvent from '@testing-library/user-event';
import 'jest-dom/extend-expect';
import Form from '../Form';
import { renderWithRedux } from '../../utils/test-utils';

describe('Form test suite', () => {
  it('Should render Form correctly', () => {
    const { container } = renderWithRedux(<Form />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should show error modal on empty text input', () => {
    const { getByText } = renderWithRedux(<Form />);

    userEvent.click(getByText('Decide'));

    expect(getByText('Please enter what you want to do')).toBeInTheDocument();
  });

  it('Should show error modal on same text input', () => {
    const initialState = {
      oldTextInput: 'marcelo'
    };

    const { getByText, getByTestId } = renderWithRedux(<Form />, initialState);

    userEvent.type(getByTestId('input'), 'marcelo');

    userEvent.click(getByText('Decide'));

    expect(getByText('Please do another thing!')).toBeInTheDocument();
  });
});
