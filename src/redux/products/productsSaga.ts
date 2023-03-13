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
    if (response.ok) {
      const data = yield response.json();
      yield put(getProductsSucces(data));
    }
  } catch (error: any) {
    yield put(getProductsFail(error.message));
  }
}

//watcher
export function* getProductsWatcher() {
  yield takeLatest(getProductsRequested.type, getProductsWorker);
}
