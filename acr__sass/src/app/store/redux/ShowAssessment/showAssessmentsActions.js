export const PROVIDE_ASSESSMENTS_DATA = "PROVIDE_ASSESSMENTS_DATA"
export const UPDATE_ASSESSMENTS_DATA = "UPDATE_ASSESSMENTS_DATA"

export const provideShowAssessment = data => {
    return {
        type: PROVIDE_ASSESSMENTS_DATA,
        payload: data
    }
}

export const updateAssessmentData = data => {
    return {
        type: UPDATE_ASSESSMENTS_DATA,
        payload:  data
    }
}