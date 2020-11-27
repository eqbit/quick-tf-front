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
