import { UPDATE_REGISTERED_LISTINGS, FETCH_REGISTERED_LISTINGS } from "./constants";
import { UpdateRegisteredListingPayload } from './types';
import { RegisteredListingsRequestOptions } from '../../api/requests/listings';

export const fetchRegisteredListingsAction = (payload: RegisteredListingsRequestOptions) =>
  ({
    type: FETCH_REGISTERED_LISTINGS,
    payload,
  } as const);

export const updateRegisteredListingsAction = (payload: UpdateRegisteredListingPayload) =>
  ({
    type: UPDATE_REGISTERED_LISTINGS,
    payload,
  } as const);
