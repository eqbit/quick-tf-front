import { put } from "redux-saga/effects";
import { ReqResponse } from '../../../types/api';
import { logger } from '../../../services/logger';
import { updateRegularItemsAction } from '../actions';
import { RegularItemsResponse } from '../../../api/requests/prices/types';
import { regularItemsRequest } from '../../../api/requests/prices/regular-items';

export function* updateRegisteredTradesSaga() {
  try {
    const { data, success, error }: ReqResponse<RegularItemsResponse> = yield regularItemsRequest();

    if (success) {
      yield put(updateRegularItemsAction(data));
    } else {
      throw new Error(`Unsuccessful response: ${error}`);
    }
  } catch (e) {
    logger.error('Error in updateRegisteredTradesSaga', e.message)
  }
}
