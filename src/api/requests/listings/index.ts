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

export type NiceDealsOptions = {
  percent: number;
  depth: number;
};

export const niceDealsRequest = async (options: NiceDealsOptions) =>
  fetch.get<ReqResponse<NiceDeal[]>>(niceDealsEndpoint, options);
