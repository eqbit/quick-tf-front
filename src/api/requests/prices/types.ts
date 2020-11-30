import { ItemSchema } from '../../../types/api';

export type GeneratedBasePrice = {
  craftMaterialType: string;
  id: number;
  imageUrl: string;
  imageUrlLarge: string;
  itemSlot: string;
  name: string;
  price: string;
  usedByClasses: string;
};

export type GetGeneratedBasePricesResponse = GeneratedBasePrice[];

export type GeneratedBasePriceItem = {
  id: number;
  name: string;
  effect: string;
  effectId: number;
  price: string;
};

export type GeneratedBasePriceListResponse = {
  prices: GeneratedBasePriceItem[];
  schema: ItemSchema;
};
