import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import { fetchCartData, fetchFavouriteData, fetchCartProductList, productDataActions } from './Store/product-slice';
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Components/Header/index";
import Advertisment from "./Components/Advertisment";
import Routes from './Routes';
import React from 'react';
import cartActions from './Redux_Thunk/cart-action-creators.es6';
import initRedux from './Redux_Thunk/init-redux.es6';
import NewApp from './NewApp';
import Product from './Components/Product';
// import store from './Store';


const store = initRedux();

// console.log(store);


const App = (props) => {
  // console.log("dynamic content", props.data.cart);
  let {items} = props.data.cart;
  console.log('dynamic ',items);
  let newTransformedContent = [];
  for(let key in items) {
    newTransformedContent.push(items[key])
  }

  console.log(newTransformedContent);

  const dispatch = useDispatch();
  //const token = localStorage.getItem('token');
  let token = null;
  if (typeof window !== 'undefined') {
    // Perform localStorage action
   token = localStorage.getItem('token');
    // const item = localStorage.getItem('key')
  }
  const isLogin = useSelector(state => state.isLogin);
  
  useEffect(() => {
    dispatch(productDataActions.setToken({ token }));
    if (isLogin) {
      dispatch(fetchFavouriteData());
      dispatch(fetchCartProductList());

    }
  }, [dispatch, token, isLogin]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])


  return (
    <div>
      {/* <Header />
      <Advertisment />

      <Routes /> */}
      {/* <NewApp /> */}
      <Product filteredProductList={newTransformedContent}/>
    </div>
  );
}

App.loadData = () => {
  return [
    cartActions.getCartItems
  ];
}

export default App;
