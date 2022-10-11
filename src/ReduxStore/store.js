import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose } from 'redux';
  import thunkMiddleware from 'redux-thunk';
  import loggerMiddleware from 'redux-logger';
  import cart from "./states/cart";

  
  export default function (initialStore = {}) {
    const reducer = combineReducers({
      cart
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