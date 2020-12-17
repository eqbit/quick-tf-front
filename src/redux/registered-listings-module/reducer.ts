import { Reducer } from "redux";
import { UPDATE_REGISTERED_LISTINGS } from "./constants";
import { RegisteredListingsModuleState } from "./types";
import * as actions from "./actions";
import { InferValueTypes } from "../../types/redux/global";

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState: RegisteredListingsModuleState = {};

const reducer: Reducer<RegisteredListingsModuleState, ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_REGISTERED_LISTINGS:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
