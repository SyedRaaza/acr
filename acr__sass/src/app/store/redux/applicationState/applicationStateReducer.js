import {APP_STATE} from './applicationStateTypes';

const initialState = {
    appState: true,
}

const appStateReducer = (state = initialState , action) => {
    switch(action.type) {
        case APP_STATE: return {
            appState: false
        }
        default: return state
    }
}

export default appStateReducer;