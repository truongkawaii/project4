import { delay } from 'lodash';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import RecruitmentService from '../../Services/recruitment.service';
import UpfileService from '../../Services/upfile.service';
import UserService from '../../Services/user.service';

import { Actions, getListUserRec, getProfileUserSuccess, userLoginSuccess } from '../actions';

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
function* userRegis(action) {
  // const {userName,password} = action.payload;
  console.log(action.payload,'action.payload;');
  try {
    yield call(UserService.signup,action.payload);
    yield toastSuccess('Đăng kí thành công');
    // const res = yield call(UserService.login, action.payload);
    // const token = yield res.access_token;
    // yield put(userLoginSuccess(token));
    // const infoUser = yield call(UserService.getProfile);
    // yield put(getProfileUserSuccess(infoUser));
    // yield toastSuccess('Đăng nhập thành công');
  } catch (error) {
    console.log('Đăng kí thất bại');
  }
}

function* userInfo(){
  const infoUser = yield call(UserService.getProfile);
  const {recruitmentType} = infoUser;
  console.log(recruitmentType,'recruitmentType');
  yield put(getListUserRec({vip:recruitmentType===1?true:false}))
  yield put(getProfileUserSuccess(infoUser));
}
function* userAddCoins(action){
   
   yield call(RecruitmentService.addCoins,action.payload);
   yield toastSuccess('Mua coins thành công');
   const infoUser = yield call(UserService.getProfile);
   yield put(getProfileUserSuccess(infoUser));
  // const {recruitmentType} = infoUser;
  // console.log(recruitmentType,'recruitmentType');
  // yield put(getListUserRec({vip:recruitmentType===1?true:false}))
  // yield put(getProfileUserSuccess(infoUser));
}
function* userUpgrade(action){
   
   yield call(RecruitmentService.removeCoins,action.payload);
   yield call(RecruitmentService.upgradeVipRec,action.payload)
    yield toastSuccess('Nâng vip thành công');
   const infoUser = yield call(UserService.getProfile);
   yield put(getProfileUserSuccess(infoUser));
  // const {recruitmentType} = infoUser;
  // console.log(recruitmentType,'recruitmentType');
  // yield put(getListUserRec({vip:recruitmentType===1?true:false}))
  // yield put(getProfileUserSuccess(infoUser));
}

export default function* loginSaga() {
  yield takeLatest(Actions.USER_LOGIN, userLogin);
  yield takeLatest(Actions.GET_USER_INFO, userInfo);
  yield takeLatest(Actions.ADD_COINS, userAddCoins);
  yield takeLatest(Actions.UPGRADE_VIP, userUpgrade);
  yield takeLatest(Actions.USER_SIGNUP, userRegis);
  
  // yield takeLatest(Actions.EDIT_TODO, editTodoList);
}
