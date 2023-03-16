import { RootState } from "./../../redux/store";
import { product, ProducstInitialType } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProducstInitialType = {
  products: [],
  isLoading: false,
  error: null,
  favoriteProducts: [],
  cart: {
    products: [],
    totalItems: 0,
    totalPrice: 0,
  },
  filter: "all",
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
    toggleFavorite: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const thisProduct = state.products.find((product) => product.id === id);

      const exists = state.favoriteProducts.find(
        (product) => product.id === id
      );

      if (exists && thisProduct) {
        state.favoriteProducts = state.favoriteProducts.filter(
          (product) => product.id !== id
        );
      } else if (!exists && thisProduct) {
        state.favoriteProducts.push(thisProduct);
      }
    },
    toggleCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const thisProduct = state.products.find((product) => product.id === id);

      const alreadyExists = state.cart.products.find(
        (product) => product.id === id
      );

      if (thisProduct && alreadyExists) {
        state.cart.products = state.cart.products.filter(
          (product) => product.id !== id
        );
      } else if (thisProduct) {
        state.cart.products.push({ ...thisProduct, quantity: 1 });
      }
    },
    emptyCart: (state) => {
      state.cart.products = [];
    },
    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const thisProduct = state.cart.products.find(
        (product) => product.id === id
      );

      if (thisProduct) {
        thisProduct.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const thisProduct = state.cart.products.find(
        (product) => product.id === id
      );

      if (thisProduct && thisProduct?.quantity !== 1) {
        thisProduct.quantity--;
      } else {
        state.cart.products = state.cart.products.filter(
          (product) => product.id !== id
        );
      }
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    emptyFavList: (state) => {
      state.favoriteProducts = [];
    },
  },
});

//actions
export const {
  getProductsRequested,
  getProductsSucces,
  getProductsFail,
  toggleFavorite,
  toggleCart,
  changeFilter,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
  emptyFavList,
} = productsSlice.actions;

//selectors

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectFilter = (state: RootState) => state.products.filter;
export const selectFavorites = (state: RootState) =>
  state.products.favoriteProducts;
export const selectCart = (state: RootState) => state.products.cart;
export const selectProductById = (state: RootState, id: number) =>
  state.products.products.find((product) => product.id === id);

//reducer
export default productsSlice.reducer;
