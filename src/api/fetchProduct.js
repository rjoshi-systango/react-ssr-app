export const fetchProduct = async() => {
    return fetch("https://shop-trade-46795-default-rtdb.firebaseio.com/product_detail.json")
    .then(response => response.json())
    .catch(error => console.log(error));
}