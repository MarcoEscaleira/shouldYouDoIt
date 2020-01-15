import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import store, { initialStoreState } from "../store";

export const renderWithRedux = (ui: JSX.Element, initialState?: {}) => {
  const state = {
    ...initialStoreState,
    ...initialState
  };
  return {
    ...render(
      <Provider store={store(state)}>
        <Router>{ui}</Router>
      </Provider>
    )
  };
};

export const renderWithRouter = (ui: JSX.Element) => ({
  ...render(<Router>{ui}</Router>)
});

const middlewares = [thunk];
export const mockStore = configureStore(middlewares);
