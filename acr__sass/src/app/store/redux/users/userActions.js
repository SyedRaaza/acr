import axios from "axios";
import {FETCH_USER_REQUEST , FETCH_USER_SUCCESS , FETCH_USER_FAILURE , REDUCE_CAKE} from "./userTypes";

// const data = {
//     organization_name:"Google",
//     business_email:"example@gmail.com",
//     organization_domain:"google",
//     first_name:"Syed",
//     last_name:"Mohammad Raza",
//     email:"shah.one3@gmail.com",
//     type: "admin"
// }

export const getUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export const getUsersSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const getUsersFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const reduceCake = () => {
    return {
        type: REDUCE_CAKE
    }
}

export const getUsers = data => {
    return (dispatch) => {
        dispatch(getUsersRequest)
        axios.post('http://pligence-acr.com/tenant/signup/', 
        data,
        {
        headers: {
            "Content-type":"application/json"
        }
        })
        .then(res => {
            const users = res
            console.log(users)
            dispatch(getUsersSuccess(users))
        })
        .catch(err => {
            const errorMsg = err
            //alert(err)
            dispatch(getUsersFailure(errorMsg))
        })
    }
}
