import { Reducer } from "redux";
import { UPDATE_REGISTERED_TRADES } from "./constants";
import { TRegisteredTradeModuleState } from "./types";
import * as actions from "./actions";
import { InferValueTypes } from "../../types/global";

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState: TRegisteredTradeModuleState = {
  trades: [],
};

const reducer: Reducer<TRegisteredTradeModuleState, ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_REGISTERED_TRADES:
      return {
        ...state,
        trades: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
