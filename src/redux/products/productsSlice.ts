import { RootState } from "./../../redux/store";
import { product, ProducstInitialType } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProducstInitialType = {
  products: [],
  isLoading: false,
  error: null,
  favoriteProducts: [],
  cart: [],
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

      if (thisProduct?.isFavorite === false) {
        thisProduct.isFavorite = true;
        state.favoriteProducts.push(thisProduct);
      } else if (thisProduct?.isFavorite === true) {
        thisProduct.isFavorite = false;
        state.favoriteProducts = state.favoriteProducts.filter(
          (product) => product.id !== id
        );
      }
    },
    addToCart: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      const thisProduct = state.products.find((product) => product.id === id);

      const alreadyExists = state.cart.find((product) => product.id === id);

      if (thisProduct && alreadyExists) {
        state.cart = state.cart.filter((product) => product.id !== id);
      } else if (thisProduct) {
        state.cart.push(thisProduct);
      }
    },
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

//actions
export const {
  getProductsRequested,
  getProductsSucces,
  getProductsFail,
  toggleFavorite,
  addToCart,
  changeFilter,
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
