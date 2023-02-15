import { Reducer } from "react";
import { IUserData, ME_REQURST, ME_REQURST_ERROR, ME_REQURST_SUCCESS, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction } from "./actions";

export type MeState = {
  loading: boolean;
  error: string,
  data: IUserData,
}

type MeAction = MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;

export const meReducer: Reducer<MeState, MeAction> = (state, action) => {
  switch (action.type) {
    case ME_REQURST:
      return {
        ...state,
        loading: true,
      };
    case ME_REQURST_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case ME_REQURST_SUCCESS:
      return {
        ...state,
        data: action.data,
      }
    default:
      return state;
  }
}
