import { call, put, takeLatest } from 'redux-saga/effects';
import UserService from '../../Services/user.service';

import { Actions, userLoginSuccess } from '../actions';
function* userLogin(action) {
  // const {userName,password} = action.payload;
  console.log(action, 'action');
  try {
    const res = yield call(UserService.login, action.payload);
    const token = yield res.access_token;
    yield put(userLoginSuccess(token));
  } catch (error) {}
}

export default function* loginSaga() {
  yield takeLatest(Actions.USER_LOGIN, userLogin);
  // yield takeLatest(Actions.EDIT_TODO, editTodoList);
}
