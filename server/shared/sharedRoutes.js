import React from "react";
import App from '../../src/App';


import { Route, IndexRoute } from 'react-router';
import ProductPage from "../../src/pages/product";
import StaticPage from "../../src/pages/static";
import ProductDetails from "../../src/component/productDetails";


export const routes = () => {
  return (
    <Route path="/" component={App} >
      {/* <IndexRoute component={HomePage} /> */}
      <Route path="/product" component={ProductPage} />
      <Route path="/static-content" component={StaticPage} />
      <Route path="/product/:product_name" component={ProductDetails} />
    </Route>
  );
};