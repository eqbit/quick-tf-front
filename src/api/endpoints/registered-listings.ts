import { apiRoot } from '../../config/api';
import { RegisteredListingsRequestOptions } from '../requests/listings';

export const getRegisteredListingsEndpoint = ({
  name,
  quality,
  effect,
}: RegisteredListingsRequestOptions) =>
  effect
    ? `${apiRoot}/registered-listings/${quality}/${name}/${effect}`
    : `${apiRoot}/registered-listings/${quality}/${name}`;
