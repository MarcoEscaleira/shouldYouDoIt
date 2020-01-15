import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "~/pages/HomePage/HomePage";
import GalleryPage from "~/pages/GalleryPage/GalleryPage";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import NotFound from "~/components/NotFound/NotFound";

import { AppContainer } from "./styled-components";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Fragment>
      <AppContainer>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route component={NotFound} />
        </Switch>
      </AppContainer>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default AppRouter;
