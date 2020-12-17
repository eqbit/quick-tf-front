import { takeEvery } from "@redux-saga/core/effects";
import { FETCH_REGISTERED_LISTINGS } from "../constants";
import { updateRegisteredListingsSaga } from "./update";

export const updateRegisteredListingsSagas = [
  takeEvery(FETCH_REGISTERED_LISTINGS, updateRegisteredListingsSaga),
];
