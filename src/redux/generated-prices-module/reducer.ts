import { Reducer } from "redux";
import { UPDATE_GENERATED_BASE_PRICES, UPDATE_GENERATED_BASE_PRICES_LIST } from './constants';
import { GeneratedPricesModuleState } from "./types";
import * as actions from "./actions";
import { InferValueTypes } from "../../types/redux/global";

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState: GeneratedPricesModuleState = {
  basePrices: [],
  items: {},
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
    case UPDATE_GENERATED_BASE_PRICES_LIST:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.name]: { ...action.payload.data },
        }
      };
    default:
      return state;
  }
};

export default reducer;
