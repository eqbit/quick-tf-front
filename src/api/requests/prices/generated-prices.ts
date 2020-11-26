import { fetch } from '../../fetch';
import { generatedBasePricesEndpoint } from '../../endpoints/generated-prices';
import { ReqResponse } from '../../../types/api';
import { GetGeneratedBasePricesResponse } from './types';

export const generatedBasePricesRequest = async () =>
  fetch.get<ReqResponse<GetGeneratedBasePricesResponse>>(generatedBasePricesEndpoint);
