import { TRegisteredTrade } from "./types";
import { UPDATE_REGISTERED_TRADES, FETCH_REGISTERED_TRADES } from "./constants";

export const fetchRegisteredTradesAction = () =>
  ({
    type: FETCH_REGISTERED_TRADES,
  } as const);

export const updateRegisteredTradesAction = (payload: TRegisteredTrade[]) =>
  ({
    type: UPDATE_REGISTERED_TRADES,
    payload,
  } as const);
