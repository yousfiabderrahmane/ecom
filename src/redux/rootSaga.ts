import { all } from "redux-saga/effects";
import { getProductsWatcher } from "./products/productsSaga";
import { getSingleProductWatcher } from "./SingleProduct/singleProductSaga";

export default function* rootSaga() {
  yield all([getProductsWatcher(), getSingleProductWatcher()]);
}
