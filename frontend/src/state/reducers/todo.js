import { Actions } from "../actions";

const initialState = {
  num: 0,
};
function todo(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_TODO_SUCCESS:
      return { ...state, num: state.num + 1 };
    default:
      return { ...state };
  }
}
export default todo;
