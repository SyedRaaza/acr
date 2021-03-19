import axios from 'axios';

export const ISO_DASHBOARD_REQUEST = "ISO_DASHBOARD_REQUEST"
export const ISO_DASHBOARD_SUCCESS = "ISO_DASHBOARD_SUCCESS"
export const ISO_DASHBOARD_FAILURE = "ISO_DASHBOARD_FAILURE"
export const ISO_DASHBOARD_UPDATE = "UPDATE_DASHBOARD_ISO_DATA"

export const isoDashboardRequest = () => {
    return {
        type: ISO_DASHBOARD_REQUEST
    }
}

export const isoDashboardSuccess = data => {
    return {
        type: ISO_DASHBOARD_SUCCESS,
        payload: data
    }
}

export const isoDashboardFailure = data => {
     return {
         type: ISO_DASHBOARD_FAILURE,
         payload: data
     }
}

export const upDateDashboardData = data => {
    return {
        type: ISO_DASHBOARD_UPDATE,
        payload: data
    }
}

export const getISODashboardData = () => {
    return dispatch => {
        dispatch(isoDashboardRequest())
        axios.get('/maturity/iso/dashboard/')
        .then(res => dispatch(isoDashboardSuccess(res.data.data)))
        .catch(err => dispatch(isoDashboardFailure(err)))
    }
}

export const updateISODashboardData = data => {
    return dispatch => {
        
        axios.post('/maturity/iso/dashboard/' , data)
        .then(res => dispatch(upDateDashboardData(res.data.data)))
        .catch(err => dispatch(isoDashboardFailure(err)))
    }
}