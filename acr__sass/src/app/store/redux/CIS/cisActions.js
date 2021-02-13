import axios from "axios";
import {CIS_DATA} from './cisTypes';

export const cisDataSuccess = resData => {
    return {
        type: CIS_DATA,
        payload: resData
    }
}

export const getCisData = () => {
    return async (dispatch) => {
        dispatch(cisDataSuccess);
       await axios.get('/api/e-commerce-app/cis')
        .then(res => {
            const resData = res.data
            console.log(resData)
            dispatch(cisDataSuccess(resData))
        })
        .catch(err => alert(err))
    }
}