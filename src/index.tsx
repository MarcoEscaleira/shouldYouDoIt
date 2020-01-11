import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import 'normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <Provider store={store()}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
