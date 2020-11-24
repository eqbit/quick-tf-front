import { all } from "redux-saga/effects";
import { updateRegisteredTradeSagas } from "./registered-trades-module/sagas/root";

export function* rootSaga() {
  yield all([...updateRegisteredTradeSagas]);
}
