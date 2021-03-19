import {ISO_DASHBOARD_REQUEST , ISO_DASHBOARD_SUCCESS , ISO_DASHBOARD_FAILURE , ISO_DASHBOARD_UPDATE} from "./ISODashboardActions";

const initialState = {
    isoDashboardData: [],
    loading: true,
    assessment_list: []
}

const isoDashboardReducer = (state = initialState , action) => {
    switch(action.type) {
        case ISO_DASHBOARD_REQUEST: return {
            ...state,
            loading: true
        }
        case ISO_DASHBOARD_SUCCESS: return {
            ...state,
            isoDashboardData: action.payload.dashboard_data,
            assessment_list: action.payload.assessment_list,
            loading: false
        }
        case ISO_DASHBOARD_FAILURE: return {
            isoDashboardData: action.payload,
            loading: false
        }
        case ISO_DASHBOARD_UPDATE: return {
            ...state,
            isoDashboardData: action.payload.dashboard_data,
            loading: false
        }
        default: return state
    }
}

export default isoDashboardReducer;