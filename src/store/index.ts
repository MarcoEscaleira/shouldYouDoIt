import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import decisionReducer, { DecisionsState } from './decisions';

export type StoreState = DecisionsState;

export default (intialState?: StoreState) => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    process.env.NODE_ENV === 'production'
      ? compose
      // @ts-ignore
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    decisionReducer,
    intialState,
    composeEnhancers(...enhancers)
  );
};
