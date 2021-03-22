import axios from "axios";


export const ISO_CREATE_DATA_REQUEST = "ISO_CREATE_DATA_REQUEST";
export const ISO_CREATE_DATA_SUCCESS = "ISO_CREATE_DATA_SUCCESS";
export const ISO_CREATE_DATA_FAILURE = "ISO_CREATE_DATA_FAILURE";



export const isoCreateDataRequest = () => {
    return {
        type: ISO_CREATE_DATA_REQUEST
    }
}

export const isoCreateDataSuccess = data => {
    return {
        type: ISO_CREATE_DATA_SUCCESS,
        payload: data
    }
}

export const isoCreateDataFailure = error => {
    return {
        type: ISO_CREATE_DATA_FAILURE,
        payload: error
    }
}

export const getISOData = data => {
    return async (dispatch) => {
        dispatch(isoCreateDataRequest());
       await axios.post('/maturity/iso/assessment/', data )
        .then(res => {
            const resData = res.data.data;
            dispatch(isoCreateDataSuccess(resData))
        })
        .catch(err => dispatch(ISO_CREATE_DATA_FAILURE(err)))
    }
}