import { combineReducers } from 'redux';
import todo from './todo';
import loginReducer from './login';
import JobReducer from './jobs';
// Combine reducer 

const rootReducer = combineReducers({
  todoList : todo,
  loginUser : loginReducer,
  jobs : JobReducer
});
 
export default rootReducer;