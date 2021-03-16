import { call, put, takeLatest } from 'redux-saga/effects';
import { toastSuccess } from '../../Helper/toastHelper';
import UpfileService from '../../Services/upfile.service';


import { Actions, getAllJobSuccess } from '../actions';
import RecruitmentService from '../../Services/recruitment.service';

function* uploadJob(action) {
  const {file} = action.payload;
  const jobData = action.payload;
  const data = new FormData()
  data.append('file', file)
  try {
    const res = yield call(UpfileService.upfile,data);
    yield call(RecruitmentService.upPost,{...jobData,thumbnail:res.url});
    yield toastSuccess('Tạo Job thành công!');
    const listJob = yield call(RecruitmentService.listJob);
    yield put(getAllJobSuccess(listJob))
  } catch (error) {}
}

function* getAllJob() {
  
  try {
    const res = yield call(RecruitmentService.listJob);
    yield put(getAllJobSuccess(res))
    // yield call(RecruitmentService.upPost,{...jobData,thumbnail:res.url});
    // yield toastSuccess('Tạo Job thành công!');
  } catch (error) {}
}

function* handlerDeleteJob(action) {
  const id = action.payload;
  try {
    yield call(RecruitmentService.deleteJob,id);
    yield toastSuccess('Xóa thành công');
    const res = yield call(RecruitmentService.listJob);
    yield put(getAllJobSuccess(res))
    // yield call(RecruitmentService.upPost,{...jobData,thumbnail:res.url});
    // yield toastSuccess('Tạo Job thành công!');
  } catch (error) {}
}

function* handlerEditJob(action) {
  const {file} = action.payload;
  const jobData = action.payload;
  const data = new FormData()
  data.append('file', file)
  try {
    const res = yield call(UpfileService.upfile,data);
    yield call(RecruitmentService.editJob,{...jobData,thumbnail:res.url});
    yield toastSuccess('Tạo Job thành công!');
    const listJob = yield call(RecruitmentService.listJob);
    yield put(getAllJobSuccess(listJob))
  } catch (error) {}
}



export default function* handlerJobSaga() {
  yield takeLatest(Actions.UPLOAD_POST, uploadJob);
  yield takeLatest(Actions.GET_ALL_JOB, getAllJob);
  yield takeLatest(Actions.DELETE_JOB, handlerDeleteJob);
  yield takeLatest(Actions.EDIT_JOB, handlerEditJob);
  // yield takeLatest(Actions.EDIT_TODO, editTodoList);
}
