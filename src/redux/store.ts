import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import singleProductReducer from "./SingleProduct/singleProductSlice";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
