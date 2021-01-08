import { combineReducers } from 'redux';
import todo from './todo';

// Combine reducer 

const rootReducer = combineReducers({
  todoList : todo
});
 
export default rootReducer;