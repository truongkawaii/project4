import actions from './action.type';

export const getListUser = () => ({
  type: actions.GET_LIST_USER
})
export const verifyCandidate = (payload) => ({
  type: actions.VERIFY_CANDIDATE,
  payload
})

export const getListUserSuccess = (payload ) => ({
  type: actions.GET_LIST_USER_SUCCESS,
  payload  
})

