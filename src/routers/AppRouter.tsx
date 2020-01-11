import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import GalleryPage from '../pages/GalleryPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Fragment>
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default AppRouter;
