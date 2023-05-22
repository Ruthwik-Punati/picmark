import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const productsSlice = createSlice({
  name: "products",
  initialState: { data: [] },
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
});
export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
export function getProducts() {
  return async function getProducts(dispatch, getState) {
    const data = await fetch("https://fakestoreapi.com/products");
    const result = await data.json();
    dispatch(fetchProducts(result));
  };
}
