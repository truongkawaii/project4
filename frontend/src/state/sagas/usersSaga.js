import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getListUserSuccess } from '../actions';
import UserService from '../../Services/user.service';
import CandidateService from '../../Services/cadidate.service';



function* getListUserHandler() {

    try {
        const res = yield call(UserService.getListUser);
        yield put(getListUserSuccess(res));

    } catch (error) { }
}


function* handlerVerifyCandidate(action) {

    try {
        yield call(CandidateService.verifyCandidate, action.payload);
        const res = yield call(UserService.getListUser);
        yield put(getListUserSuccess(res));
    } catch (error) { }
}




export default function* handlerListUserSaga() {
    yield takeLatest(Actions.GET_LIST_USER, getListUserHandler);
    yield takeLatest(Actions.VERIFY_CANDIDATE, handlerVerifyCandidate);
}
