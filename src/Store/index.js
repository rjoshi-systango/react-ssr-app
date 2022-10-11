// import { configureStore } from "@reduxjs/toolkit";


// const store = configureStore({
//     reducer: productDataSlice.reducer
    
// })

// export default store;


import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose } from 'redux';
    import thunkMiddleware from 'redux-thunk';
    import loggerMiddleware from 'redux-logger';
    import product from "./product-slice";

  
  export default function (initialStore = {}) {
    const reducer = combineReducers({
        product
    });
    const middleware = [thunkMiddleware, loggerMiddleware];
    let newCompose;
    if (typeof window !== 'undefined') {
      newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    const composeEnhancers = newCompose || compose;
    return composeEnhancers(
        applyMiddleware(...middleware)
      )(createStore)(reducer, initialStore);
  }