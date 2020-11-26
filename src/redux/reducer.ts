import { combineReducers } from "redux";
import registeredTrades from "./registered-trades-module";
import generatedPrices from "./generated-prices-module";

export const reducer = combineReducers({
  registeredTrades,
  generatedPrices,
});
