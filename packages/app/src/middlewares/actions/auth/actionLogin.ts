import {RoleType} from 'common/Constants';
import actionTypes from '../actionTypes';

const _login = (payload: any) => {
  return {
    type: actionTypes.LOGIN,
    payload,
  };
};
const _addToken = (token?: string, role?: string) => {
  return {
    type: actionTypes.SAVE_TOKEN,
    token,
  };
};
const _savelogin = (payload: any) => {
  return {
    type: actionTypes.SAVE_LOGIN,
    payload,
  };
};
const _logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
export const onSaveDataUser = (user: any, token?: string, role?: RoleType) => {
  return async (dispatch: any, getState: any) => {
    dispatch(_login(user, token, role));
  };
};

export const onLogout = () => async (dispatch: any, getState: any) => {
  dispatch(_logout());
};
export const onLogin = (user: any) => async (dispatch: any, getState: any) => {
  dispatch(_login(user));
};
export const onSaveToken =
  (token: string) => async (dispatch: any, getState: any) => {
    dispatch(_addToken(token));
  };
export const onSaveLogin =
  (username: string, password: string, isSave: boolean) =>
  async (dispatch: any, getState: any) => {
    try {
      dispatch(_savelogin({username, password, isSave}));
    } catch (error) {}
  };
