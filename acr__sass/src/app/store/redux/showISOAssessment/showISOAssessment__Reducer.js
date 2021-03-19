import {REQUEST_ISO_ASSESSMENT_DATA , SUCCESS_ISO_ASSESSMENT_DATA , FAILURE_ISO_ASSESSMENT_DATA} from './showISOAssessment__Actions';

const initialState = {
    isoShowAssessment: [],
    loading: true
}

const isoShowAssessmentReducer = (state = initialState , action) => {
    switch(action.type) {
        case REQUEST_ISO_ASSESSMENT_DATA: return {
            ...state,
            loading: true
        }
        case SUCCESS_ISO_ASSESSMENT_DATA: return {
            ...state,
            isoShowAssessment: action.payload,
            loading: false
        }
        case FAILURE_ISO_ASSESSMENT_DATA: return {
            isoShowAssessment: action.payload,
            loading: false
        }
        default: return state
    }
}

export default isoShowAssessmentReducer;

