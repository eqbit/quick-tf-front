import { NiceDeal } from '../../../api/requests/listings/types';

export const getPriceRangeFromNiceDeals = (deals: NiceDeal[]) => {
  return deals.reduce((result, current) => {
    if (current.listingPrice > result.max) {
      result.max = Math.ceil(current.listingPrice);
    }

    if (current.listingPrice < result.min) {
      result.min = Math.floor(current.listingPrice);
    }

    return result;
  }, {
    min: 0,
    max: 0,
  })
};
