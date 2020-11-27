import { put, select } from "redux-saga/effects";
import { generatedBasePricesRequest } from '../../../api/requests/prices/generated-prices';
import { ReqResponse } from '../../../types/api';
import { logger } from '../../../services/logger';
import { updateGeneratedBasePricesAction } from '../actions';
import { GetGeneratedBasePricesResponse } from '../../../api/requests/prices/types';
import { ReduxStateType } from '../../../types/redux/state';

export function* updateGeneratedBasePricesSaga() {
  try {
    const basePrices = yield select((state: ReduxStateType) => state?.generatedPrices?.basePrices);

    if (!basePrices.length) {
      const { data, success }: ReqResponse<GetGeneratedBasePricesResponse> = yield generatedBasePricesRequest();

      if (success) {
        yield put(updateGeneratedBasePricesAction(data));
      } else {
        throw new Error('Unsuccessful response');
      }
    }
  } catch (e) {
    logger.error('Error in updateGeneratedBasePricesSaga', e.message)
  }
}
