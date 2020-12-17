import { combineReducers } from "redux";
import registeredTrades from "./registered-trades-module";
import generatedPrices from "./generated-prices-module";
import regularItems from "./regular-items-module";
import registeredListings from "./registered-listings-module";

export const reducer = combineReducers({
  registeredTrades,
  generatedPrices,
  regularItems,
  registeredListings,
});
