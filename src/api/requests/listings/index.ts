import { fetch } from '../../fetch';
import { ReqResponse } from '../../../types/api';
import { getRegisteredListingsEndpoint, niceDealsEndpoint } from '../../endpoints/registered-listings';
import { NiceDeal, RegisteredListing } from './types';

export type RegisteredListingsRequestOptions = {
  name: string;
  quality: string;
  effect?: string;
}

export const registeredListingsRequest = async (options: RegisteredListingsRequestOptions) =>
  fetch.get<ReqResponse<RegisteredListing[]>>(getRegisteredListingsEndpoint(options));

export const niceDealsRequest = async (percent: number) =>
  fetch.get<ReqResponse<NiceDeal[]>>(niceDealsEndpoint, { percent });
