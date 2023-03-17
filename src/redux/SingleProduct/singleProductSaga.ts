import { getSingleProduct } from "./api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSingleProductFail,
  getSingleProductRequested,
  getSingleProductSuccess,
} from "./singleProductSlice";

//worker
function* getSingleProductWorker(action: any): any {
  try {
    const response = yield call(getSingleProduct, action.payload);
    const singleProduct = yield response.json();

    yield put(getSingleProductSuccess(singleProduct));
  } catch (error: any) {
    yield put(getSingleProductFail(error.message));
  }
}

//watcher
export function* getSingleProductWatcher() {
  yield takeLatest(getSingleProductRequested.type, getSingleProductWorker);
}
