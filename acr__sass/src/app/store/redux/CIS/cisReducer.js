import {CIS_DATA} from './cisTypes';

const initialState = {
    cis: [],
    loading: false
}

const cisReducer = (state = initialState , action) => {
    switch(action.type) {
        case CIS_DATA: return {
            cis: action.payload,
            loading: false
        }
        case "CIS_DATA_REQUEST": return {
            ...state,
            loading: true
        }
        case "CIS_DATA_FAILURE": return {
            loading: false,
            cis: action.payload
        }
        default: return state
    }
}

export default cisReducer;