import { RootState } from "./../../redux/store";
import { product, ProducstInitialType } from "./types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ProducstInitialType = {
  products: [],
  isLoading: false,
  error: null,
  favoriteProducts: [],
  cart: {
    products: [
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
          rate: 2.1,
          count: 430,
        },
        isFavorite: false,
        quantity: 0,
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
          rate: 2.1,
          count: 430,
        },
        isFavorite: false,
        quantity: 0,
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
          rate: 2.1,
          count: 430,
        },
        isFavorite: false,
        quantity: 0,
      },
    ],
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
  toggleCart,
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
