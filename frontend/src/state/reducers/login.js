import { Actions } from "../actions";

const initialState = {
  token: localStorage.getItem('token'),
  isLogin : false
};
function login(state = initialState, action) {
  switch (action.type) {
    case Actions.USER_LOGIN_SUCCESS:
      const token = action.payload;  
      localStorage.setItem('token',token);
      return { ...state,token , isLogin:true};
    default:
      return { ...state};
  } 
}
export default login;
  