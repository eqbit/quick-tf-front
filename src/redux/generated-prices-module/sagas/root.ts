import { takeEvery } from "@redux-saga/core/effects";
import { FETCH_GENERATED_BASE_PRICES } from "../constants";
import { updateGeneratedBasePricesSaga } from './update';

export const updateGeneratedPricesSagas = [
  takeEvery(FETCH_GENERATED_BASE_PRICES, updateGeneratedBasePricesSaga),
];
