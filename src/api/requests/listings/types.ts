import { EItemQualities } from '../../../data';

export type RegisteredListing = {
  date_time: string;
  effectIndex: number;
  id: number;
  intend: 0 | 1;
  killstreak_tier: 0 | 1 | 2 | 3;
  name: string;
  price_keys: string;
  price_metal: string;
  quality: keyof typeof EItemQualities;
  steamid: string;
};

export type NiceDeal = {
  id: number;
  effect: string;
  effectIndex: number;
  generatedPrice: number;
  listingPrice: number;
  name: string;
  imageUrl?: string;
  date_time: string;
};
