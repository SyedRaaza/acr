const initialState = {
    showAssessMentData: {}
}

const showAssessmentDataReducer = (state = initialState , action) => {
    switch(action.type) {
        case "PROVIDE_ASSESSMENT": return {
            showAssessMentData: action.payload
        }
        default: return state
    }
}

export default showAssessmentDataReducer;