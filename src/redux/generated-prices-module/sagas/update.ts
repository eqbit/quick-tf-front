import { put } from "redux-saga/effects";
import { generatedBasePricesRequest } from '../../../api/requests/prices/generated-prices';
import { ReqResponse } from '../../../types/api';
import { logger } from '../../../services/logger';
import { updateGeneratedBasePricesAction } from '../actions';
import { GetGeneratedBasePricesResponse } from '../../../api/requests/prices/types';

export function* updateGeneratedBasePricesSaga() {
  try {
    const { data, success }: ReqResponse<GetGeneratedBasePricesResponse> = yield generatedBasePricesRequest();

    if (success) {
      yield put(updateGeneratedBasePricesAction(data));
    } else {
      throw new Error('Unsuccessful response');
    }
  } catch (e) {
    logger.error('Error in updateGeneratedBasePricesSaga', e.message)
  }
}
