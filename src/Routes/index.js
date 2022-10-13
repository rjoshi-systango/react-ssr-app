import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductDetails from "../component/productDetails";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import StaticPage from "../pages/static";

export default function Routes() {
    console.log("routes");
  return (
    <Switch>
        <Route path='/' exact>
            <HomePage />    
        </Route> 
        <Route path='/product' exact>
            <ProductPage />
        </Route> 
        <Route path='/product/:product_name'>
            <ProductDetails />
        </Route>
        <Route path='/static-content' >
            <StaticPage />
        </Route> 
    </Switch>
    // <div></div>

)
}
