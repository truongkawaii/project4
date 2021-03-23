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
export const editJobs = (payload) =>({
    type:actions.EDIT_JOB,
    payload
})
export const editJobsSuccess = (payload) =>({
    type:actions.EDIT_JOB_SUCCESS,
    payload
})

export const getAllJobSuccess = (payload) =>({
    type:actions.GET_ALL_JOB_SUCCESS,
    payload 
})
export const deleteRec = (payload) =>({
    type:actions.DELETE_JOB,
    payload
})
export const approveJob = (payload) =>({
    type:actions.APPROVE_TO_JOB,
    payload
})
export const rejectApplyJob = (payload) =>({
    type:actions.REJECT_TO_JOB,
    payload
})
export const rejectApplyJobSuccess = (payload) =>({
    type:actions.REJECT_TO_JOB_SUCCESS,
    payload
})
export const approveJobSuccess = (payload) =>({
    type:actions.APPROVE_TO_JOB_SUCCESS,
    payload
})
export const applyToJob = (payload) =>({
    type:actions.APPLY_TO_JOB,
    payload
})
export const applyToJobSuccess = (payload) =>({
    type:actions.APPLY_TO_JOB_SUCCESS,
    payload
})

 