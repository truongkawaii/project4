import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getAllJobSuccess } from '../actions';
import UserService from '../../Services/user.service';
import RecruitmentService from '../../Services/recruitment.service';
import { toastError, toastSuccess } from '../../Helper/toastHelper';



function* approveSaga(action) {

    try {
       yield call(RecruitmentService.approveJob,action.payload);
       yield toastSuccess('Chấp nhận thành công');
        const res = yield call(RecruitmentService.listJob);
        yield put(getAllJobSuccess(res))

    } catch (error) { }
}
function* rejectJoinJobSaga(action) {

    try {
       yield call(RecruitmentService.rejectJob,action.payload);
       yield toastError('Từ chối thành công');
        const res = yield call(RecruitmentService.listJob);
        yield put(getAllJobSuccess(res))
    } catch (error) { }
}

 
function* applyToJob(action) {

    try {
       yield call(RecruitmentService.applieToJob,{id:action.payload,content:{
        Subject: "ON JOB",
        Content: "OKE CONTENT"
       }});
       yield toastSuccess('Ứng tuyển thành công');
       const res = yield call(RecruitmentService.listJob);
        yield put(getAllJobSuccess(res))

    } catch (error) { }
}

 



export default function* feedBackSaga() {
    yield takeLatest(Actions.APPROVE_TO_JOB, approveSaga);
    yield takeLatest(Actions.APPLY_TO_JOB, applyToJob);
    yield takeLatest(Actions.REJECT_TO_JOB, rejectJoinJobSaga);

 
}
