import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import decisionReducer from './decisions'

export default () => {
  const middlewares = [thunk];
  const enhancers = [
    applyMiddleware(...middlewares)
  ];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  return createStore(decisionReducer, composeEnhancers(...enhancers));
};