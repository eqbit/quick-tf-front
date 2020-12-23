import { GeneratedBasePrice, GeneratedBasePriceItem } from '../../api/requests/prices/types';
import { TSchemaItem } from '../../api/requests/items/types';

export type GeneratedPricesModuleState = {
  basePrices: GeneratedBasePrice[];
  items: Record<string, GeneratedPricesListItem>
};

export type GeneratedPricesListItem = {
  prices: GeneratedBasePriceItem[];
  schema: TSchemaItem;
}

export type UpdateGeneratedBasePricesActionPayload = GeneratedBasePrice[]

export type UpdateGeneratedBasePricesListActionPayload = {
  name: string,
  data: GeneratedPricesListItem;
}
