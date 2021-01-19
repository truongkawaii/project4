import actions from './action.type';

export const userLogin = payload => ({
  type: actions.USER_LOGIN,
  payload,
});

export const userLoginSuccess = payload => ({
  type: actions.USER_LOGIN_SUCCESS,
  payload,
});

