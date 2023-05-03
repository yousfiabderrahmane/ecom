import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
// reducers
import productsReducer from "./products/productsSlice";
import singleProductReducer from "./SingleProduct/singleProductSlice";
// rootsaga
import rootSaga from "./rootSaga";

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
