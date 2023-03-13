import { all } from "redux-saga/effects";
import { getProductsWatcher } from "./products/productsSaga";

export default function* rootSaga() {
  yield all([getProductsWatcher()]);
}
