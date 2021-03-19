import {FETCH_CISMATURITY_REQUEST} from "./cisMaturityTypes";
import {FETCH_CISMATURITY_FAILURE} from "./cisMaturityTypes";
import axios from "axios";

export const cisMaturityDataSuccess = data => {
    return {
        type: FETCH_CISMATURITY_REQUEST,
        payload: data
    }
}

export const cisMaturityDataFailure = data => {
    return {
        type: FETCH_CISMATURITY_FAILURE,
        payload: data
    }
}

export const cisMaturityDataRequest = () => {
    return {
        type: "FETCH_CISMATURITY_REQUEST_DATA",
    }
}

export const getCisMaturityData = () => {
    return dispatch => {
        dispatch(cisMaturityDataRequest)
        axios.get('/maturity/assessment/')
        .then(res => {
            const Response  = res
            dispatch(cisMaturityDataSuccess(Response))
        })
        .catch(err => {
            const Error = err;
            dispatch(cisMaturityDataFailure(Error))
            console.log(Error + "from CIS Maturity data")
        })
    }
};