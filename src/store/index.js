import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import decisionReducer from './decisions';

export default intialState => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    process.env.NODE_ENV === 'production'
      ? compose
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    decisionReducer,
    intialState,
    composeEnhancers(...enhancers)
  );
};
