import { fetch } from '../../fetch';
import { ReqResponse } from '../../../types/api';
import { unusualPricesEndpoint } from '../../endpoints/item-info';
import { UnusualPrices } from './types';

export const unusualPricesRequest = async (name: string, effect: string) =>
  fetch.get<ReqResponse<UnusualPrices>>(`${unusualPricesEndpoint}/${name}/${effect}`);
