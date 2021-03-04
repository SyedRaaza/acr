const initialState = {
    loading: true,
    cisDashboard: {},
    assessment_list: []
}

const cisDashboardDataReducer = (state = initialState , action) => {
    switch(action.type) {
        case "FETCH_DASHBOARD_CIS_REQUEST": return {
            ...state,
            loading: true
        }
        case "FETCH_DASHBOARD_CIS_SUCCESS": return {
            cisDashboard: action.payload,
            assessment_list: action.payload.data.data.assessment_list,
            loading: false
        }
        case "FETCH_DASHBOARD_CIS_FAILURE": return {
            cisDashboard: action.payload,
            loading: false
        }
        case "UPDATE_DASHBOARD_CIS_DATA": return {
            ...state,
            cisDashboard: action.payload,
        }
        default: return state
    }
}

export default cisDashboardDataReducer;