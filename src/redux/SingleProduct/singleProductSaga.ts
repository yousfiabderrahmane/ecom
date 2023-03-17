import { getSingleProduct } from "./api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getSingleProductFail,
  getSingleProductRequested,
  getSingleProductSuccess,
} from "./singleProductSlice";

//worker
function* getSingleProductWorker(action: any): any {
  const { id } = action.payload;
  try {
    const response = yield call(getSingleProduct, id);
    const data = yield response.json();

    data.size = "xl";
    data.color = "red";

    console.log(data);
    yield put(getSingleProductSuccess(data));
  } catch (error: any) {
    yield put(getSingleProductFail(error.message));
  }
}

//watcher
export function* getSingleProductWatcher() {
  yield takeLatest(getSingleProductRequested.type, getSingleProductWorker);
}
