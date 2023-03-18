import { RootState } from "./../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SingleProductInitialType,
  initialSingleProduct,
  singleProduct,
} from "./types";

const initialState: SingleProductInitialType = {
  SingleProduct: initialSingleProduct,
  isLoading: false,
  error: null,
  cart: {
    products: [],
    totalItems: 0,
    totalPrice: 0,
  },
};

const SingleProductSlice = createSlice({
  name: "SingleProduct",
  initialState,
  reducers: {
    getSingleProductRequested: (
      state,
      action: PayloadAction<{ id: number }>
    ) => {
      state.SingleProduct = initialSingleProduct;
      state.error = null; // in case kant
      state.isLoading = true;
    },
    getSingleProductSuccess: (state, action: PayloadAction<singleProduct>) => {
      state.SingleProduct = action.payload;
      state.isLoading = false;
    },
    getSingleProductFail: (state, action: PayloadAction<string | null>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addToCart: (state, action) => {
      const { quantity } = action.payload;

      state.SingleProduct.quantity = quantity;

      state.cart.products.push(state.SingleProduct);
    },
  },
});

export const {
  getSingleProductRequested,
  getSingleProductSuccess,
  getSingleProductFail,
  addToCart,
} = SingleProductSlice.actions;

export const selectCart = (state: RootState) =>
  state.singleProduct.cart.products;

export default SingleProductSlice.reducer;
