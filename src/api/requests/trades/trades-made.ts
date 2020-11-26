import { fetch } from '../../fetch';
import { tradesMadeEndpoint } from '../../endpoints/trades-made';
import { GetTradesMadeResponse } from './types';
import { ReqResponse } from '../../../types/api';

export const tradesMadeRequest = async () => fetch.get<ReqResponse<GetTradesMadeResponse>>(tradesMadeEndpoint);
