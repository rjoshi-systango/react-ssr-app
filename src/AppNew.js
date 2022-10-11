import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataLoaded, loadData } from './ReduxStore/states/cart';
import store from './ReduxStore/store';
// import store from './Store';
import { fetchCartData } from './Store/product-slice';
//rv

export default function AppNew(props) {
    const cart = useSelector(state => state.cart);

    return (
        
        <React.Fragment>
            <div>New App Rv 1 {cart.data.length || 0}</div>
            <div>New App Rv 1 {props.data.cart || 0}</div>
        </React.Fragment>
    )
}

AppNew.loadData = async () => {
    return  store()

    // return (async (dispatch) => {
    //     return new Promise(async (res, rej) => {
    //         const data = await (await fetch("https://shop-trade-46795-default-rtdb.firebaseio.com/product_detail.json")).json();
    //         store().dispatch(dataLoaded(data));
    //         res(data);
    //     })
    // })
}

// AppNew.getData = () => {
//     const state = store().getState().cart;
//     return state;
// }
