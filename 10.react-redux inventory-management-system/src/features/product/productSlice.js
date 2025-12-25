import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      console.log("product data", [...state.products]);
    },
  },
});

export  const { addProduct } = product.actions;

export default product.reducer;
