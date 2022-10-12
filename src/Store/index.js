
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import cart from './cart-reducer';

export function configureStore(initialState = {}) {
    const middleware = [thunk];

    let newCompose;
    if (typeof window !== 'undefined') {
        newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
    }

    const composeEnhancers = newCompose || compose;

    const store = createStore(cart, initialState, composeEnhancers(applyMiddleware(...middleware)));

    return store;
}