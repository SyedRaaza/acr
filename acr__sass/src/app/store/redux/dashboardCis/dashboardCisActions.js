import axios from "axios";

export const dashboardCisRequest = () => {
    return {
        type: "FETCH_DASHBOARD_CIS_REQUEST",
    }
}

export const dashboardCisSuccess = data => {
    return {
        type: "FETCH_DASHBOARD_CIS_SUCCESS",
        payload: data
    }
}

export const dashboardCisFailure = error => {
    return {
        type: "FETCH_DASHBOARD_CIS_FAILURE",
        payload: error
    }
}

export const upDateDashboardData = data => {
    return {
        type: "UPDATE_DASHBOARD_CIS_DATA",
        payload: data
    }
}

export const getDashboardCisData = () => {
    return dispatch => {
        dispatch(dashboardCisRequest)
        axios.get("/maturity/dashboard/cis/")
        .then(res => {
            const response = res
            dispatch(dashboardCisSuccess(response))
        })
        .catch(err => {
            const error = err
            dispatch(dashboardCisFailure(error))
        })
    }
}

export const getUpdatedDashboardCisData = data => {
    return dispatch => {
        dispatch(dashboardCisRequest)
        axios.post("/maturity/dashboard/cis/",data)
        .then(res => {
            const response = res.data
            dispatch(upDateDashboardData(response))
        })
        .catch(err => {
            const error = err
            dispatch(dashboardCisFailure(error))
        })
    }
}