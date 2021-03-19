import {ISO_SHOWSINGLEASSESSMENT_SAVE , ISO_SHOWSINGLEASSESSMENT_RESET} from "./ISOShowAssessmentActions";

const initialState = {
    isoAssessmentSingle: [],
    loading: true
}

const isoSingleAssessmentReducer = (state = initialState , action) => {
    switch(action.type) {
        case ISO_SHOWSINGLEASSESSMENT_SAVE: return {
            ...state,
            isoAssessmentSingle: action.payload,
            loading: false,
        }

        case ISO_SHOWSINGLEASSESSMENT_RESET: return {
            ...state,
            isoAssessmentSingle: []
        }
        default: return state
    }
}

export default isoSingleAssessmentReducer;