import FavouriteItem from "./FavouriteItem";
import React, { useReducer, useState } from "react";
import Message from "../Message";
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

const priceReducer = (state, action) => {
    if (action.type === true) {
        console.log("1");
        return {
            subTotal: state.subTotal + action.productTotalPrice,
            tax: state.tax + (action.productTotalPrice * 5) / 100,
            total: state.total + (action.productTotalPrice + (action.productTotalPrice * 5) / 100),
            isSelectAllClicked: state.isSelectAllClicked,
            selectCount: state.selectCount,
            selectedProductCount: state.selectedProductCount + 1
        }
    }
    if (action.type === false) {
        console.log("2");

        return {
            subTotal: state.subTotal - action.productTotalPrice,
            tax: state.tax - (action.productTotalPrice * 5) / 100,
            total: state.total - (action.productTotalPrice + (action.productTotalPrice * 5) / 100),
            isSelectAllClicked: state.isSelectAllClicked ? !state.isSelectAllClicked : state.isSelectAllClicked,
            selectCount: state.selectCount,
            selectedProductCount: state.selectedProductCount - 1
        }
    }
    if (action.type === "ADD") {
        const productPrice = parseInt(action.productTotalPrice);
        console.log("3");
        return {
            subTotal: state.subTotal + productPrice,
            tax: state.tax + (productPrice * 5) / 100,
            total: state.total + (productPrice + (productPrice * 5) / 100),
            isSelectAllClicked: state.isSelectAllClicked,
            selectCount: state.selectCount,
            selectedProductCount: state.selectedProductCount
        }
    }
    if (action.type === "SUB") {
        const productPrice = parseInt(action.productTotalPrice);
        console.log("4");
        return {
            subTotal: state.subTotal - productPrice,
            tax: state.tax - (productPrice * 5) / 100,
            total: state.total - (productPrice + (productPrice * 5) / 100),
            isSelectAllClicked: state.isSelectAllClicked,
            selectCount: state.selectCount,
            selectedProductCount: state.selectedProductCount
        }
    }
    if (action.type === "SELECT_ALL") {
        const allProductTotal = parseInt(action.totalPrice);
        console.log("5");
        return {
            subTotal: allProductTotal,
            tax: (allProductTotal * 5) / 100,
            total: allProductTotal + ((allProductTotal * 5) / 100),
            isSelectAllClicked: true,
            selectCount: 1,
            selectedProductCount: action.productLength
        }
    }
    if (action.type === "DESELECT_ALL") {
        console.log("6");
        return {
            subTotal: 0,
            tax: 0,
            total: 0,
            isSelectAllClicked: false,
            selectCount: 2,
            selectedProductCount: 0
        }
    }
    if (action.type === "") {
        console.log("7");
        return {
            subTotal: state.subTotal,
            tax: state.tax,
            total: state.total,
            isSelectAllClicked: false,
            selectCount: state.selectCount,
            selectedProductCount: state.selectedProductCount
        }
    }
}

const Favourite = (props) => {
    const { productList } = props;
    const [totalPrice, dispatch] = useReducer(priceReducer, { total: 0, tax: 0, subTotal: 0, isSelectAllClicked: false, selectCount: 0, selectedProductCount: 0 });
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const history = useHistory();
    console.log("total " + totalPrice.selectedProductCount);
    console.log(productList.length);
    const calculateTotalPrice = (checkbox, productTotalPrice) => {
        dispatch({ type: checkbox, productTotalPrice });
    }

    const buyClickHandler = () => {
        setIsOrderPlaced(true);
        setTimeout(() => {
            setIsOrderPlaced(false);
            history.replace('/');
        }, 2000)
    }

    const selectAllChangleHandler = (event) => {
        const { checked } = event.target;
        let totalPrice = 0;

        if (checked) {
            productList.forEach((product) => {
                let price = parseInt(product.price);
                totalPrice += price;
            });
            dispatch({ type: "SELECT_ALL", totalPrice: totalPrice, productLength: productList.length });
        }
        else {
            dispatch({ type: "DESELECT_ALL" });
        }
    }

    const deSelectAll = (totalPrice) => {
        dispatch({ type: "", productTotalPrice: totalPrice });
    }

    const closeMessageBoxHandler = () => {
        setIsOrderPlaced(false);
    }
    let portalElement = null;
    if (typeof window !== 'undefined') {
         portalElement = document.getElementById('overlays');

    }


    return (
        <>
            <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        {isOrderPlaced && ReactDOM.createPortal(<Message onClose={closeMessageBoxHandler} />, portalElement)}
                        <div className="col">
                            {productList.length === 0 &&
                                <h5>No Favourite</h5>
                            }
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="h5">Your Favourite</th>
                                            <th scope="col">
                                                <input type='checkbox' checked={totalPrice.isSelectAllClicked} className={`mb-0`} onChange={selectAllChangleHandler} /> Select
                                            </th>
                                            <th scope="col">Brand</th>
                                            <th scope="col">Favourite</th>
                                            <th scope="col">Price ($)</th>
                                        </tr>
                                    </thead>
                                    {
                                        productList.map((product) => (

                                            <FavouriteItem key={`${product.id} ${product.sizeId}`}
                                                productInformation={product}
                                                calculateTotalPrice={calculateTotalPrice}
                                                isSelectAllClicked={totalPrice.isSelectAllClicked}
                                                onProductDeselect={deSelectAll}
                                                selectCounter={totalPrice.selectCount}

                                            />
                                        ))
                                    }

                                </table>
                            </div>

                            <div className="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: "16px" }} >
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-4 col-xl-3">
                                            <div className="d-flex justify-content-between" style={{ fontWeight: "500" }}>
                                                <p className="mb-2">Subtotal</p>
                                                <p className="mb-2">${totalPrice.subTotal.toFixed(2)}</p>
                                            </div>
                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-between mb-4" style={{ fontWeight: "500" }}>
                                                <p className="mb-2">Total (tax included)</p>
                                                <p className="mb-2">${totalPrice.tax.toFixed(2)}</p>
                                            </div>

                                            <button type="button" onClick={buyClickHandler} className="btn btn-primary btn-block btn-lg">
                                                <div className="d-flex justify-content-between">
                                                    <span>Checkout</span>
                                                    <span className="px-2"> ${totalPrice.total.toFixed(2)}</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Favourite;