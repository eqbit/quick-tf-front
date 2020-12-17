import { takeEvery } from "@redux-saga/core/effects";
import { FETCH_REGULAR_ITEMS } from "../constants";
import { updateRegisteredTradesSaga } from "./update";

export const updateRegularItemsSagas = [
  takeEvery(FETCH_REGULAR_ITEMS, updateRegisteredTradesSaga),
];
