import { put } from "redux-saga/effects";
import { tradesMadeRequest } from '../../../api/requests/trades/trades-made';
import { ReqResponse } from '../../../types/api';
import { GetTradesMadeResponse } from '../../../api/requests/trades/types';
import { logger } from '../../../services/logger';
import { updateRegisteredTradesAction } from '../actions';

export function* updateRegisteredTradesSaga() {
  try {
    const { data, success }: ReqResponse<GetTradesMadeResponse> = yield tradesMadeRequest();

    if (success) {
      yield put(updateRegisteredTradesAction(data));
    } else {
      throw new Error('Unsuccessful response');
    }
  } catch (e) {
    logger.error('Error in updateRegisteredTradesSaga', e.message)
  }
}
