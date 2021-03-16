import { Actions } from "../actions";

const initialState = {
  items: null,
  total: 0
};
function dataUsers(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_LIST_USER_SUCCESS:
      const { items, total } = action.payload;
      return { ...state, items, total };
    default:
      return { ...state };
  }
}
export default dataUsers;
