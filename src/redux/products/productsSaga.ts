import { product } from "./types";
import { call, takeLatest, put } from "redux-saga/effects";
import {
  getProductsRequested,
  getProductsFail,
  getProductsSucces,
} from "./productsSlice";
import { getProducts } from "./api";

//worker
function* getProductsWorker(): any {
  try {
    const response = yield call(getProducts);
    console.log(response);
    if (response.ok) {
      const data = yield response.json();
      const shuffledData = data.sort(() => {
        return Math.random() - 0.5;
      });
      const products = shuffledData.map((product: product) => {
        return { ...product, isFavorite: false };
      });

      yield put(getProductsSucces(products));
    }
  } catch (error: any) {
    yield put(getProductsFail(error.message));
  }
}

//watcher
export function* getProductsWatcher() {
  yield takeLatest(getProductsRequested.type, getProductsWorker);
}
