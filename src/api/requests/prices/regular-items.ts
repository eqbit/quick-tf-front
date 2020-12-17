import { fetch } from '../../fetch';
import { regularItemsPricesEndpoint } from '../../endpoints/regular-items';
import { ReqResponse } from '../../../types/api';
import { RegularItemsResponse } from './types';

export const regularItemsRequest = async () =>
  fetch.get<ReqResponse<RegularItemsResponse>>(regularItemsPricesEndpoint);
