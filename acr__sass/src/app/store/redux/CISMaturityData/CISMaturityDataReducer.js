import {FETCH_CISMATURITY_REQUEST} from "./cisMaturityTypes";
import {FETCH_CISMATURITY_FAILURE} from "./cisMaturityTypes";

const initialState = {
    cisMaturityData: {},
    loading: true
}

const cisMaturityDataReducer = (state = initialState , action) => {
    switch(action.type) {
        case "FETCH_CISMATURITY_REQUEST_DATA": return {
            ...state,
            loading: true
        }
        case FETCH_CISMATURITY_REQUEST: return {
            cisMaturityData: action.payload,
            loading: false
        }
        case FETCH_CISMATURITY_FAILURE: return {
            cisMainData: action.payload,
            loading: false
        }
        default: return state
    }
}

export default cisMaturityDataReducer;