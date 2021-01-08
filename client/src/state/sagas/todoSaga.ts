import { put, takeLatest } from 'redux-saga/effects';
// import {} from '../actions'
import { Actions, addTodoSuccess } from '../actions';


function* addTodoList() {
  yield put(addTodoSuccess(1))
  // yield loadin open 
  // yield call data 
  // yield set data 
  // yield loading close 
 
}
// function* editTodoList() {
  
// }

export default function* todoSaga() {
  yield takeLatest(Actions.ADD_TODO, addTodoList);
  // yield takeLatest(Actions.EDIT_TODO, editTodoList);
}