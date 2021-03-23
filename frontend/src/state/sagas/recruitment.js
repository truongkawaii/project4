import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getListRecruitmentSuccess } from '../actions';
import UserService from '../../Services/user.service';
import CandidateService from '../../Services/cadidate.service';
import UpfileService from '../../Services/upfile.service';
import { toastSuccess } from '../../Helper/toastHelper';
import RecruitmentService from '../../Services/recruitment.service';



function* getListRecruitmentHandler() {

    try {
        const res = yield call(RecruitmentService.getListRecruitment);
        yield put(getListRecruitmentSuccess(res));
    } catch (error) { }
}
// function* getListUserRecHandler() {

//     try {
//         const res = yield call(UserService.getListUser);
//         yield put(getListUserRecSuccess(res));

//     } catch (error) { }
// }
// function* getListRecruitmentHandler() {

//     try {
//         const res = yield call(UserService.getListRecruitment);
//         yield put(getListRecruitmentSuccess(res));
//     } catch (error) { }
// }


// function* handlerVerifyCandidate(action) {

//     try {
//         yield call(CandidateService.verifyCandidate, action.payload);
//         const res = yield call(UserService.getListUser);
//         yield put(getListUserSuccess(res));
//     } catch (error) { }
// }
// function* handlerUpdateCV(action) {
//     const {cv} = action.payload;
//     // const cvData = new FormData()
//     // cvData.append('cv', cv);
//     const avatarData = new FormData()
//     avatarData.append('cv', cv);
 
//     try {
//         // const cvUrl = yield call(UpfileService.upfile,cvData);
//         const avatarUrl = yield call(UpfileService.upfile,avatarData);
//         console.log(avatarUrl,'avatarUrl'); 
//         // yield call(UserService.editUserCV,{...action.payload,cv:cvUrl,avatar:avatarUrl});
//         yield call(UserService.editUserCV,{...action.payload,cv:avatarUrl.url});
        
//         const res = yield call(UserService.getListUser);
//         yield put(getListUserSuccess(res));
//         yield toastSuccess('Cập nhật thành công!');
//         console.log(action.payload,'payloadcv');

//         // yield call(CandidateService.verifyCandidate, action.payload);
//         // const res = yield call(UserService.getListUser);
//         // yield put(getListUserSuccess(res));
//     } catch (error) { }
// }




export default function* handlerListRecruitmentSaga() {
    yield takeLatest(Actions.GET_LIST_RECRUITMENT, getListRecruitmentHandler);
    // yield takeLatest(Actions.GET_LIST_USER_REC, getListUserRecHandler);
    // yield takeLatest(Actions.VERIFY_CANDIDATE, handlerVerifyCandidate);
    // yield takeLatest(Actions.EDIT_USER, handlerUpdateCV);
    // yield takeLatest(Actions.GET_LIST_RECRUITMENT, getListRecruitmentHandler);

}
