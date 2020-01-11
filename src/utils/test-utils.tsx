import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { DecisionsState } from "store/decisions";
import store from '../store';

export const renderWithRedux = (ui: ReactNode, initialState: DecisionsState) => {
  return {
    ...render(
      <Provider store={store(initialState)}>
        <Router>{ui}</Router>
      </Provider>
    )
  };
};

export const renderWithRouter = (ui: ReactNode) => {
  return {
    ...render(<Router>{ui}</Router>)
  };
};

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);
