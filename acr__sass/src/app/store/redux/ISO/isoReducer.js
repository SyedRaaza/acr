import {ISO_CREATE_DATA_REQUEST , ISO_CREATE_DATA_SUCCESS , ISO_CREATE_DATA_FAILURE} from './isoActions';

const initialState = {
    iso: [],
    loading: false
}

const isoReducer = (state = initialState , action) => {
    switch(action.type) {
        case ISO_CREATE_DATA_REQUEST: return {
            ...state,
            loading: true
        }
        case ISO_CREATE_DATA_SUCCESS: return {
            ...state,
            iso: action.payload,
            loading: false
        }
        case ISO_CREATE_DATA_FAILURE: return {
            iso: action.payload,
            loading: false
        }
        default: return state
    }
}

export default isoReducer;