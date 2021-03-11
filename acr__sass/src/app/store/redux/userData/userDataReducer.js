import {NEW_USER} from "./userDataTypes";
import produce from 'immer';

const initialState = {
    user : {}
}

const newUserReducer = (state  = initialState , action) => {
    switch(action.type) {
        case NEW_USER: return {
            ...state,
            user: action.payload
        }
        case "UPDATE_USER": return produce(state , draft => {
            draft.user.data[0].first_name = action.payload
        })
        default: return state
    }
}

export default newUserReducer;