export type TRegisteredTrade = {
  accountSteamid: string;
  direction: boolean;
  effect: string;
  id: number;
  itemid: string;
  keys: number;
  metal: number;
  name: string;
  partnerSteamid: string;
  quality: string;
  timestamp: string;
};

export type TRegisteredTradeModuleState = {
  trades: TRegisteredTrade[];
};
