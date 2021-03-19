import axios from 'axios';

export const ISO_SHOWSINGLEASSESSMENT_SAVE = "ISO_SHOWSINGLEASSESSMENT_SAVE"
export const ISO_SHOWSINGLEASSESSMENT_RESET = "ISO_SHOWSINGLEASSESSMENT_RESET"
export const ISO_SHOWSINGLEASSESSMENT_FAILURE = "ISO_SHOWSINGLEASSESSMENT_FAILURE"

export const isoSaveSingleAssessment = data => {
    return {
        type: ISO_SHOWSINGLEASSESSMENT_SAVE,
        payload: data
    }
}

export const isoResetSingleAssessment = () => {
    return {
        type: ISO_SHOWSINGLEASSESSMENT_RESET,
    }
}

// export const isoShowSingleAssessmentFailure = data => {
//      return {
//          type: ISO_SHOWSINGLEASSESSMENT_FAILURE,
//          payload: data
//      }
// }

// export const getISODashboardData = () => {
//     return dispatch => {
//         dispatch(isoShowSibgleAssessmentRequest())
//         axios.get('/maturity/iso/dashboard/')
//         .then(res => dispatch(isoShowSingleAssessmentSuccess(res.data.data)))
//         .catch(err => dispatch(isoShowSingleAssessmentFailure(err)))
//     }
// }