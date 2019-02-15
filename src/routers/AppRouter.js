import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import GalleryPage from '../components/GalleryPage';
import Header from '../components/Header';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default AppRouter;