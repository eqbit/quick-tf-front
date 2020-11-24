import { put } from "redux-saga/effects";
import { UPDATE_REGISTERED_TRADES } from "../constants";

export function* updateRegisteredTradesSaga() {
  yield put({
    type: UPDATE_REGISTERED_TRADES,
    payload: [{ test: "test value" }],
  });
}
