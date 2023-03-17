import { product } from "./../products/types";
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
  },
});

export const {
  getSingleProductRequested,
  getSingleProductSuccess,
  getSingleProductFail,
} = SingleProductSlice.actions;

export default SingleProductSlice.reducer;
