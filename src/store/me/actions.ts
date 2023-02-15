import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

export const ME_REQURST = 'ME_REQURST';
export type MeRequestAction = {
  type: typeof ME_REQURST;
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQURST,
})

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export const ME_REQURST_SUCCESS = 'ME_REQURST_SUCCESS';
export type MeRequestSuccessAction = {
  type: typeof ME_REQURST_SUCCESS;
  data: IUserData;
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQURST_SUCCESS,
  data,
})

export const ME_REQURST_ERROR = 'ME_REQURST_ERROR';
export type MeRequestErrorAction = {
  type: typeof ME_REQURST_ERROR;
  error: string,
}

export const meRequestArror: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQURST_ERROR,
  error,
})

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
  axios.get('https://oauth.reddit.com/api/v1/me.json', {
    headers: { Authorization: `bearer ${getState().token}` }
  })
    .then((resp) => {
      const userData = resp.data;
      dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.snoovatar_img }));
    })
    .catch((error) => {
      console.log(error);
      dispatch(meRequestArror(String(error)));
    })
}

export const SAVE_TOKEN = 'SAVE_TOKEN';
export type SaveTokenAction = {
  type: typeof SAVE_TOKEN;
  token: string;
}

export const saveToken: ActionCreator<SaveTokenAction> = (token: string) => ({
  type: SAVE_TOKEN,
  token,
})

export const saveTokenAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, _getState) => {
  const token = window.__token__ != 'undefined' ? window.__token__ : localStorage.getItem('token');
  if (token) {
    localStorage.setItem('token', token);
  }
  dispatch(saveToken(token));
}
