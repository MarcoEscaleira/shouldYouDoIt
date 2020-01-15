// @ts-nocheck
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import decisionReducer, { DecisionsState } from "./decisions";
import errorModalReducer, { ErrorModalState } from "./errorModal";
import { defaultDecisionsState } from "./decisions/reducer";
import { defaultErrorModalState } from "./errorModal/reducer";

export type StoreState = {
  decisions: DecisionsState;
  errorModal: ErrorModalState;
};

export const initialStoreState: StoreState = {
  decisions: defaultDecisionsState,
  errorModal: defaultErrorModalState
};

export default (intialState: StoreState = initialStoreState) => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV === "production"
      ? compose
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers({
      decisions: decisionReducer,
      errorModal: errorModalReducer
    }),
    // @ts-ignore
    intialState,
    composeEnhancers(...enhancers)
  );
};
