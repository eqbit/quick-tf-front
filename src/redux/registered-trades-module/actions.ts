import { UPDATE_REGISTERED_TRADES, FETCH_REGISTERED_TRADES } from "./constants";
import { RegisteredTrade } from '../../api/requests/trades/types';

export const fetchRegisteredTradesAction = () =>
  ({
    type: FETCH_REGISTERED_TRADES,
  } as const);

export const updateRegisteredTradesAction = (payload: RegisteredTrade[]) =>
  ({
    type: UPDATE_REGISTERED_TRADES,
    payload,
  } as const);
