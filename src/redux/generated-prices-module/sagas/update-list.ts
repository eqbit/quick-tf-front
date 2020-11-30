import { put } from "redux-saga/effects";
import { generatedBasePricesListRequest } from '../../../api/requests/prices/generated-prices';
import { ReqResponse } from '../../../types/api';
import { logger } from '../../../services/logger';
import { updateGeneratedBasePricesListAction } from '../actions';
import { GeneratedBasePriceListResponse } from '../../../api/requests/prices/types';
import { Action } from '../../../types/redux/global';

export function* updateGeneratedBasePricesListSaga(action: Action<string>) {
  try {
    const { data, success, error }: ReqResponse<
      GeneratedBasePriceListResponse
      > = yield generatedBasePricesListRequest(action.payload);

    if (success) {
      yield put(updateGeneratedBasePricesListAction({
        name: action.payload,
        data,
      }));
    } else {
      throw new Error(error);
    }
  } catch (e) {
    logger.error('Error in updateGeneratedBasePricesListSaga', e.message)
  }
}
