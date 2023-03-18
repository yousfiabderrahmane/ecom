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
    addToCart: (
      state,
      action: PayloadAction<{ quantity: number; color: string; size: string }>
    ) => {
      const { quantity, color, size } = action.payload;

      state.SingleProduct.quantity = quantity;
      state.SingleProduct.color = color;
      state.SingleProduct.size = size;

      state.cart.products.push(state.SingleProduct);
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      state.cart.products = state.cart.products.filter(
        (product) => product.id !== id
      );
    },
    emptyCart: (state) => {
      state.cart.products = [];
    },
  },
});

export const {
  getSingleProductRequested,
  getSingleProductSuccess,
  getSingleProductFail,
  addToCart,
  removeFromCart,
  emptyCart,
} = SingleProductSlice.actions;

export const selectCart = (state: RootState) =>
  state.singleProduct.cart.products;

export default SingleProductSlice.reducer;
