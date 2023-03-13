import { getProducts } from "./api";
import { product, ProducstInitialType } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProducstInitialType = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsRequested: (state) => {
      state.isLoading = true;
      state.error = null;
      state.products = [];
    },
    getProductsSucces: (state, action: PayloadAction<product[]>) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    getProductsFail: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getProductsRequested, getProductsSucces, getProductsFail } =
  productsSlice.actions;

export default productsSlice.reducer;
