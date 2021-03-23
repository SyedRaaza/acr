import axios from 'axios';

export const REQUEST_ISO_ASSESSMENT_DATA = "REQUEST_ISO_ASSESSMENT_DATA";
export const SUCCESS_ISO_ASSESSMENT_DATA = "SUCCESS_ISO_ASSESSMENT_DATA";
export const FAILURE_ISO_ASSESSMENT_DATA = "FAILURE_ISO_ASSESSMENT_DATA";


export const requestISOAssessmentData = () => {
    return {
        type: REQUEST_ISO_ASSESSMENT_DATA
    }
}

export const successISOAssessmentData = data => {
    return {
        type: SUCCESS_ISO_ASSESSMENT_DATA,
        payload: data
    }
}

export const failureISOAssessmentData = data => {
    return {
        type: FAILURE_ISO_ASSESSMENT_DATA,
        payload: data
    }
}

export const getISOAssessmentData = data => {
    return (dispatch) => {
        dispatch(requestISOAssessmentData());
        axios.get(`/maturity/iso/assessment/?limit=${data.limit}&offset=${data.offSet}` )
        .then(res => {
            const resData = res.data.data;
            dispatch(successISOAssessmentData(resData))
        })
        .catch(err => dispatch(failureISOAssessmentData(err)))
    }
}