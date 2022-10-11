import Cart from "../Components/Cart/index";
import { useSelector } from "react-redux";
import React from 'react';
import { Helmet } from "react-helmet";

const CartPage = () => {
    const cartProductList = useSelector(state => state.cartProductList);

    return (
        <div>
            <Helmet>
                <title>Your Cart</title>
                <meta name="description" content="write cart description here " />
            </Helmet>
            <Cart productList={cartProductList} />

        </div>
    );
}

export default CartPage;