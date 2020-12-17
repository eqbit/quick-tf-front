import { Reducer } from "redux";
import { UPDATE_REGULAR_ITEMS } from "./constants";
import { RegularItemsModuleState } from "./types";
import * as actions from "./actions";
import { InferValueTypes } from "../../types/redux/global";

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState: RegularItemsModuleState = {
  items: [],
};

const reducer: Reducer<RegularItemsModuleState, ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_REGULAR_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
