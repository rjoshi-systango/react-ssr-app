import fetch from 'isomorphic-fetch';

export const GET_CART_ITEMS = 'GET_CART_ITEMS';

export function getCartItems() {
  return (dispatch) => {
    return fetch('https://shop-trade-46795-default-rtdb.firebaseio.com/product_detail.json', {
      method: 'GET'
    }).then((response) => {
      return response.json().then((data) => {
        return dispatch({
          type: GET_CART_ITEMS,
          data: data
        });
      });
    }).catch(() => {
      return dispatch({ type: `${GET_CART_ITEMS}_ERROR` });
    });
  };
}

export default {
  getCartItems
};
