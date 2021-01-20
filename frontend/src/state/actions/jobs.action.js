import actions from './action.type';

export const uploadJob = payload => ({
  type: actions.UPLOAD_POST,
  payload,
});

export const uploadJobSuccess = payload => ({
  type: actions.UPLOAD_POST_SUCCESS,
  payload,
});

export const getAllJob = () =>({
    type:actions.GET_ALL_JOB
})

export const getAllJobSuccess = (payload) =>({
    type:actions.GET_ALL_JOB_SUCCESS,
    payload 
})
export const deleteRec = (payload) =>({
    type:actions.DELETE_JOB,
    payload
})

// export const deleteJobSuccess = (payload) =>({
//     type:actions.DELETE_JOB_SUCCESS,
//     payload 
// })