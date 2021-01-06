import { fetch } from '../../fetch';
import { ReqResponse } from '../../../types/api';
import { itemInfoEndpoint } from '../../endpoints/item-info';
import { TSchemaItem } from './types';

export const itemInfoRequest = async (name: string) =>
  fetch.get<ReqResponse<TSchemaItem>>(`${itemInfoEndpoint}/${name}`);
