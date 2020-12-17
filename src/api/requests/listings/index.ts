import { fetch } from '../../fetch';
import { ReqResponse } from '../../../types/api';
import { getRegisteredListingsEndpoint } from '../../endpoints/registered-listings';

export type RegisteredListingsRequestOptions = {
  name: string;
  quality: string;
  effect?: string;
}

export const registeredListingsRequest = async (options: RegisteredListingsRequestOptions) =>
  fetch.get<ReqResponse<any>>(getRegisteredListingsEndpoint(options));
