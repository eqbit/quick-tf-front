import { Reducer } from "redux";
import { UPDATE_GENERATED_BASE_PRICES } from "./constants";
import { GeneratedPricesModuleState } from "./types";
import * as actions from "./actions";
import { InferValueTypes } from "../../types/redux/global";

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState: GeneratedPricesModuleState = {
  basePrices: [],
};

const reducer: Reducer<GeneratedPricesModuleState, ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_GENERATED_BASE_PRICES:
      return {
        ...state,
        basePrices: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
