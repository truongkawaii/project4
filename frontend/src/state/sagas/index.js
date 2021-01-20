import { all } from 'redux-saga/effects';
import handlerJobSaga from './handlerJobSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    handlerJobSaga()
  ]);
}