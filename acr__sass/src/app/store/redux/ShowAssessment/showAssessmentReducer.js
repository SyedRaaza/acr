import {PROVIDE_ASSESSMENTS_DATA , UPDATE_ASSESSMENTS_DATA} from './showAssessmentsActions';
import produce from 'immer';

const initialState = {
    showAssessMentData: {}
}

const showAssessmentDataReducer = (state = initialState , action) => {
    switch(action.type) {
        case PROVIDE_ASSESSMENTS_DATA: return {
            showAssessMentData: action.payload
        }

        case UPDATE_ASSESSMENTS_DATA:  return produce(state , draft => {
            draft.showAssessMentData.controls[action.payload.controlIndex].sub_controls[action.payload.subControlIndex].is_applicable = action.payload.checkedState
        })
        default: return state
    }
}

export default showAssessmentDataReducer;