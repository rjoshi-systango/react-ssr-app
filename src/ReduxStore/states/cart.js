import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: [{ name: "ravi" }, { name: "rahul" }]
    },
    reducers: {
        dataLoaded: (state, data) => {
            state.data = data.payload;
        },
    },
});

export const loadData = () => {
    return (dispatch) => {
        return new Promise(async (res, rej) => {
            const data = await (await fetch("https://shop-trade-46795-default-rtdb.firebaseio.com/product_detail.json")).json();
            dispatch(dataLoaded(data));
            res(null);
        })
    }
}

// Action creators are generated for each case reducer function
export const { dataLoaded } = cartSlice.actions;

export default cartSlice.reducer;
