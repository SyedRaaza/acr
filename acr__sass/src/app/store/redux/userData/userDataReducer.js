import {NEW_USER} from "./userDataTypes";

const initialState = {
    user : {}
}

const newUserReducer = (state  = initialState , action) => {
    switch(action.type) {
        case NEW_USER: return {
            ...state,
            user: action.payload
        }
        default: return state
    }
}

export default newUserReducer;