export type ReqResponse<T> = {
  data: T;
  success: boolean;
  error?: string;
}

export type ItemSchema = {
  craftMaterialType: string;
  id: number;
  imageUrl: string;
  imageUrlLarge: string;
  itemSlot: string;
  name: string;
  usedByClasses: string;
};
