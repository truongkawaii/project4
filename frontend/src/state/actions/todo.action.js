import actions from './action.type';

export const addTodo = () => ({
  type: actions.ADD_TODO
})

export const addTodoSuccess = (payload ) => ({
  type: actions.ADD_TODO_SUCCESS,
  payload  
})

export const userLogin = (payload) => ({
  type: actions.USER_LOGIN,
  payload
})

export const userLoginSuccess = (payload) => ({
  type: actions.USER_LOGIN_SUCCESS,
  payload
})
