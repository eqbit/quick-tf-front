import {
  FETCH_GENERATED_BASE_PRICES, FETCH_GENERATED_BASE_PRICES_LIST,
  UPDATE_GENERATED_BASE_PRICES,
  UPDATE_GENERATED_BASE_PRICES_LIST
} from './constants';
import {
  UpdateGeneratedBasePricesActionPayload,
  UpdateGeneratedBasePricesListActionPayload
} from './types';

export const fetchGeneratedBasePricesAction = () => ({
  type: FETCH_GENERATED_BASE_PRICES,
} as const);

export const updateGeneratedBasePricesAction = (
  payload: UpdateGeneratedBasePricesActionPayload
) => ({
  type: UPDATE_GENERATED_BASE_PRICES,
  payload,
} as const);

export const fetchGeneratedBasePricesListAction = (payload: string) => ({
  type: FETCH_GENERATED_BASE_PRICES_LIST,
  payload,
} as const);

export const updateGeneratedBasePricesListAction = (
  payload: UpdateGeneratedBasePricesListActionPayload
) => ({
  type: UPDATE_GENERATED_BASE_PRICES_LIST,
  payload,
} as const);
