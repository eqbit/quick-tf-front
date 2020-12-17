import { UPDATE_REGULAR_ITEMS, FETCH_REGULAR_ITEMS } from "./constants";
import { RegularItem } from '../../api/requests/prices/types';

export const fetchRegularItemsAction = () =>
  ({
    type: FETCH_REGULAR_ITEMS,
  } as const);

export const updateRegularItemsAction = (payload: RegularItem[]) =>
  ({
    type: UPDATE_REGULAR_ITEMS,
    payload,
  } as const);
