import { RegisteredListing } from '../../api/requests/listings/types';

export type RegisteredListingsModuleState = {
  [name: string]: RegisteredListing[];
};

export type UpdateRegisteredListingPayload = {
  name: string;
  data: RegisteredListing[];
};
