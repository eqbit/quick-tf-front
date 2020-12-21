import { fetch } from '../../fetch';
import { ReqResponse } from '../../../types/api';
import { userInfoEndpoint } from '../../endpoints/user-info';
import { UserInfoResponse } from './types';

export const userInfoRequest = (steamid: string) =>
  fetch.get<ReqResponse<UserInfoResponse>>(`${userInfoEndpoint}/${steamid}`);
