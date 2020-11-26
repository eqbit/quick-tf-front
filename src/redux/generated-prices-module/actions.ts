import { FETCH_GENERATED_BASE_PRICES, UPDATE_GENERATED_BASE_PRICES } from "./constants";
import { GeneratedBasePrice } from '../../api/requests/prices/types';

export const fetchGeneratedBasePricesAction = () => ({
  type: FETCH_GENERATED_BASE_PRICES,
} as const);

export const updateGeneratedBasePricesAction = (payload: GeneratedBasePrice[]) => ({
  type: UPDATE_GENERATED_BASE_PRICES,
  payload,
} as const);
