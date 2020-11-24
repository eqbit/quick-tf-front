import { combineReducers } from "redux";
import RegisteredTrades from "./registered-trades-module";

export const reducer = combineReducers({
  registeredTrades: RegisteredTrades,
});
