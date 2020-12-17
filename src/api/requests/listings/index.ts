import { fetch } from '../../fetch';
import { ReqResponse } from '../../../types/api';
import { getRegisteredListingsEndpoint } from '../../endpoints/registered-listings';
import { RegisteredListing } from './types';

export type RegisteredListingsRequestOptions = {
  name: string;
  quality: string;
  effect?: string;
}

export const registeredListingsRequest = async (options: RegisteredListingsRequestOptions) =>
  fetch.get<ReqResponse<RegisteredListing[]>>(getRegisteredListingsEndpoint(options));
