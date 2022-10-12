import React from "react";
import App from '../../src/App';


import { Route, IndexRoute } from 'react-router';
import ProductPage from "../../src/pages/product";
import StaticPage from "../../src/pages/static";


export const routes = () => {
  return (
    <Route path="/" component={App} >
      {/* <IndexRoute component={HomePage} /> */}
      <Route path="/product" component={ProductPage} />
      <Route path="/static-content" component={StaticPage} />
    </Route>
  );
};