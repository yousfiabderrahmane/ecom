import { RootState } from "./../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SingleProductInitialType,
  initialReviews,
  initialSingleProduct,
  singleProduct,
} from "./types";

const initialState: SingleProductInitialType = {
  SingleProduct: initialSingleProduct,
  isLoading: false,
  error: null,
  reviews: initialReviews,
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
      action: PayloadAction<{
        quantity: number;
        color: string;
        size: string;
        id: number;
      }>
    ) => {
      const { quantity, color, size, id } = action.payload;

      state.SingleProduct.quantity = quantity;
      state.SingleProduct.color = color;
      state.SingleProduct.size = size;

      // pushing and updating state
      state.cart.products.push(state.SingleProduct);
      state.cart.totalItems += state.SingleProduct.quantity;
      state.cart.totalPrice += state.SingleProduct.price;
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const thisProduct = state.cart.products.find(
        (product) => product.id === id
      );

      if (thisProduct) {
        state.cart.totalItems -= thisProduct.quantity;
        state.cart.totalPrice -= thisProduct.price * thisProduct.quantity;

        state.cart.products = state.cart.products.filter(
          (product) => product.id !== id
        );
      }
    },
    emptyCart: (state) => {
      state.cart.products = [];
      state.cart.totalItems = 0;
      state.cart.totalPrice = 0;
    },
    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const thisProduct = state.cart.products.find(
        (product) => product.id === id
      );

      if (thisProduct) {
        thisProduct.quantity++;
        state.cart.totalItems++;
        state.cart.totalPrice += thisProduct.price;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const thisProduct = state.cart.products.find(
        (product) => product.id === id
      );

      if (thisProduct) {
        thisProduct.quantity--;
        state.cart.totalItems--;
        state.cart.totalPrice -= thisProduct.price;
      }
    },
    addReview: (state, action) => {
      const { name, email, title, content, rating, id, date } = action.payload;

      const newReview = {
        name,
        email,
        title,
        content,
        rating,
        id,
        date,
        isEditable: true,
      };

      state.reviews.push(newReview);
    },
    editReview: (state, action) => {
      const { name, email, title, content, rating, id } = action.payload;

      const thisReview = state.reviews.find((review) => review.id === id);

      if (thisReview) {
        thisReview.name = name;
        thisReview.email = email;
        thisReview.title = title;
        thisReview.content = content;
        thisReview.rating = rating;
      }
    },
    refreshReviews: (state) => {
      state.reviews = initialReviews;
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
  increaseQuantity,
  decreaseQuantity,
  addReview,
  refreshReviews,
  editReview,
} = SingleProductSlice.actions;

export const selectCart = (state: RootState) =>
  state.singleProduct.cart.products;

export default SingleProductSlice.reducer;
