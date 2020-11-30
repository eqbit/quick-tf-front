import { fetch } from '../../fetch';
import { generatedBasePricesEndpoint } from '../../endpoints/generated-prices';
import { ReqResponse } from '../../../types/api';
import { GeneratedBasePriceListResponse, GetGeneratedBasePricesResponse } from './types';

export const generatedBasePricesRequest = async () =>
  fetch.get<ReqResponse<GetGeneratedBasePricesResponse>>(generatedBasePricesEndpoint);

export const generatedBasePricesListRequest = async (name: string) =>
  fetch.get<ReqResponse<GeneratedBasePriceListResponse>>(`${generatedBasePricesEndpoint}/${name}`);
