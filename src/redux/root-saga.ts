import { all } from "redux-saga/effects";
import { updateRegisteredTradeSagas } from "./registered-trades-module/sagas/root";
import { updateGeneratedPricesSagas } from './generated-prices-module/sagas/root';
import { updateRegularItemsSagas } from './regular-items-module/sagas/root';

export function* rootSaga() {
  yield all([
    ...updateRegisteredTradeSagas,
    ...updateGeneratedPricesSagas,
    ...updateRegularItemsSagas,
  ]);
}
