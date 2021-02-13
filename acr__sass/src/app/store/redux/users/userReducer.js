import {FETCH_USER_SUCCESS , FETCH_USER_REQUEST , FETCH_USER_FAILURE , REDUCE_CAKE} from './userTypes'

const initialState = {
    loading: false,
    users: [],
    error: '',
    cake: 6
}

const userReducer = (state  = initialState , action) => {
    switch(action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_USER_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ""
        }
        case FETCH_USER_FAILURE: return {
            ...state,
            loading: false,
            users: [],
            error: action.payload
        }
        case REDUCE_CAKE: return {
            ...state,
            cake: state.cake - 1
        }
        default: return state
    }
}

export default userReducer;