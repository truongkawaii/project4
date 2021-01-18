import { combineReducers } from 'redux';
import todo from './todo';
import loginReducer from './login';
// Combine reducer 

const rootReducer = combineReducers({
  todoList : todo,
  loginUser : loginReducer
});
 
export default rootReducer;