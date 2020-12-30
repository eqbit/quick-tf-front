import { TSchemaItem } from '../items/types';

export type GeneratedBasePrice = TSchemaItem & {
  id: number;
  name: string;
  price: string;
};

export type GetGeneratedBasePricesResponse = GeneratedBasePrice[];

export type GeneratedBasePriceItem = {
  id: number;
  name: string;
  effect: string;
  effectId: number;
  price: number;
  bptfPrice: number;
};

export type GeneratedBasePriceListResponse = {
  prices: GeneratedBasePriceItem[];
  schema: TSchemaItem;
};

export type RegularItem = {
  currency: 'keys' | 'metal';
  name: string;
  quality: string;
  value: number;
  value_high?: number;
  imageUrl: string;
};

export type RegularItemsResponse = RegularItem[];
