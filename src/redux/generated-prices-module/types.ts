import { GeneratedBasePrice, GeneratedBasePriceItem } from '../../api/requests/prices/types';
import { ItemSchema } from '../../types/api';

export type GeneratedPricesModuleState = {
  basePrices: GeneratedBasePrice[];
  items: Record<string, GeneratedPricesListItem>
};

export type GeneratedPricesListItem = {
  prices: GeneratedBasePriceItem[];
  schema: ItemSchema;
}

export type UpdateGeneratedBasePricesActionPayload = GeneratedBasePrice[]

export type UpdateGeneratedBasePricesListActionPayload = {
  name: string,
  data: GeneratedPricesListItem;
}
