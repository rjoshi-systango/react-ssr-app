
import React from "react";
import App from "../../src/App";
import HomePage from "../../src/Pages/HomePage";
import CartPage from "../../src/Pages/CartPage";
import FavouritePage from "../../src/Pages/FavouritePage";

// import { Route, IndexRoute } from "react-router-dom";
import { Route, IndexRoute } from 'react-router';


export const routes = () => {
    return (
      <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/favourite" component={FavouritePage} />
      </Route>
    );
  };
  