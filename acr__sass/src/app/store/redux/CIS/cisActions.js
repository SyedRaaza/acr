import axios from "axios";
import {CIS_DATA} from './cisTypes';

export const updateSelection = (payload) => {
    return {
        type: "UPDATE_SELECTION",
        payload
    }
}
export var configHeaders = {
    headers: {
        "Authorization" : "token 970210f86bf660374bb2cae5338d605b84537600"
    }
}

export const cisDataRequest = () => {
    return {
        type: "CIS_DATA_REQUEST"
    }
}

export const cisDataSuccess = resData => {
    return {
        type: CIS_DATA,
        payload: resData
    }
}

export const cisDataFailure = error => {
    return {
        type: "CIS_DATA_FAILURE",
        payload: error
    }
}

export const getCisData = data => {
    return async (dispatch) => {
        dispatch(cisDataSuccess);
       await axios.post('/maturity/assessment/',
    data
       )
        .then(res => {
            const resData = res.data.data;
            console.log(resData)
            dispatch(cisDataSuccess(resData))
        })
        .catch(err => dispatch(cisDataFailure(err)))
    }
}

// export const getCisData = () => {
//     axios.get('/api/e-commerce-app/cis')
//     .then(res => {
//         dispatch(cisDataSuccess(res))
//     })
//     .catch(err =>)
// }
