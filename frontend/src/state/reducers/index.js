import { combineReducers } from 'redux';
import loginReducer from './login';
import JobReducer from './jobs';
import userReducer from './user';
import dataUsersReducer from './dataUser';
// Combine reducer 

const rootReducer = combineReducers({
  loginUser : loginReducer,
  jobs : JobReducer,
  infoUser:userReducer,
  listUser:dataUsersReducer
});
 
export default rootReducer;