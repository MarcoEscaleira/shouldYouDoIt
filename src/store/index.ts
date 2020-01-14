import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import decisionReducer, { DecisionsState } from './decisions';
import errorModalReducer, { ErrorModalState } from './errorModal';

export type StoreState = {
  decisions: DecisionsState;
  errorModal: ErrorModalState;
};

export default (intialState?: StoreState) => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    process.env.NODE_ENV === 'production'
      ? compose
      // @ts-ignore
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers({
      decisions: decisionReducer,
      errorModal: errorModalReducer
    }),
    intialState,
    composeEnhancers(...enhancers)
  );
};
