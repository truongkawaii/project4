import { Actions } from "../actions";

const initialState = {
  posts : null,
  total:0
};
function jobs(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_ALL_JOB_SUCCESS:
      const {posts,total} = action.payload;  
      return { ...state,posts,total};
    default:
      return { ...state};
  } 
}
export default jobs;
  