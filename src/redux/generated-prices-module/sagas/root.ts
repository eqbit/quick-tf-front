import { takeEvery } from "@redux-saga/core/effects";
import { FETCH_GENERATED_BASE_PRICES, FETCH_GENERATED_BASE_PRICES_LIST } from "../constants";
import { updateGeneratedBasePricesSaga } from './update-all';
import { updateGeneratedBasePricesListSaga } from './update-list';

export const updateGeneratedPricesSagas = [
  takeEvery(FETCH_GENERATED_BASE_PRICES, updateGeneratedBasePricesSaga),
  takeEvery(FETCH_GENERATED_BASE_PRICES_LIST, updateGeneratedBasePricesListSaga),
];
