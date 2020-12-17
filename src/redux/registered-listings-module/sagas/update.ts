import { put } from "redux-saga/effects";
import { ReqResponse } from '../../../types/api';
import { logger } from '../../../services/logger';
import { updateRegisteredListingsAction } from '../actions';
import { registeredListingsRequest, RegisteredListingsRequestOptions } from '../../../api/requests/listings';
import { Action } from '../../../types/redux/global';

export function* updateRegisteredListingsSaga({ payload }: Action<RegisteredListingsRequestOptions>) {
  try {
    const { data, success }: ReqResponse<any[]> = yield registeredListingsRequest(payload);
    const { name, quality, effect } = payload;
    const itemKey = `${quality} ${effect ? `${effect} ` : ''}${name}`;

    if (success) {
      yield put(updateRegisteredListingsAction({
        name: itemKey,
        data,
      }));
    } else {
      throw new Error('Unsuccessful response');
    }
  } catch (e) {
    logger.error('Error in updateRegisteredListingsSaga', e.message)
  }
}
