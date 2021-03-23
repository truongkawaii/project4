import { combineReducers } from 'redux';
import loginReducer from './login';
import JobReducer from './jobs';
import userReducer from './user';
import dataUsersReducer from './dataUser';
import dataRecruitment from './recruitment';
import dataUserRec from './dataUserRec';
// Combine reducer 

const rootReducer = combineReducers({
  loginUser : loginReducer,
  jobs : JobReducer,
  infoUser:userReducer,
  listUser:dataUsersReducer,
  listRecruitment:dataRecruitment,
  listUserSeedRec:dataUserRec
});
 
export default rootReducer;