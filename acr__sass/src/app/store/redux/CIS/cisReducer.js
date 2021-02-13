import {CIS_DATA} from './cisTypes';

const initialState = {
    cis: []
}

const cisReducer = (state = initialState , action) => {
    switch(action.type) {
        case CIS_DATA: return {
            cis: action.payload
        }
        default: return state
    }
}

export default cisReducer;