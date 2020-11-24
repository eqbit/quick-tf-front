import { takeEvery } from "@redux-saga/core/effects";
import { FETCH_REGISTERED_TRADES } from "../constants";
import { updateRegisteredTradesSaga } from "./update";

export const updateRegisteredTradeSagas = [
  takeEvery(FETCH_REGISTERED_TRADES, updateRegisteredTradesSaga),
];
