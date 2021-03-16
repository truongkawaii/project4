import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import UserService from '../../Services/user.service';

import { Actions, getProfileUserSuccess, userLoginSuccess } from '../actions';

function* userLogin(action) {
  // const {userName,password} = action.payload;
  console.log(action, 'action');
  try {
    const res = yield call(UserService.login, action.payload);
    const token = yield res.access_token;
    yield put(userLoginSuccess(token));
    const infoUser = yield call(UserService.getProfile);
    yield put(getProfileUserSuccess(infoUser));
    yield toastSuccess('Đăng nhập thành công');
  } catch (error) {
    console.log('Đăng nhập thất bại');
  }
}

function* userInfo(){
  const infoUser = yield call(UserService.getProfile);
  yield put(getProfileUserSuccess(infoUser));
}

export default function* loginSaga() {
  yield takeLatest(Actions.USER_LOGIN, userLogin);
  yield takeLatest(Actions.GET_USER_INFO, userInfo);
  // yield takeLatest(Actions.EDIT_TODO, editTodoList);
}
