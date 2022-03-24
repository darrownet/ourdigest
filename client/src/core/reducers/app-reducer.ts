import * as types from "../actions/app-action-types";
import {AppState, AppAction} from "../actions/app-action-creators";

export const initialState: AppState = {
    app: {
        apiRequestOpen: false,
        config: {},
        foo: ''
    }
};

const appReducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case types.DATA_RECEIVED:
            return <AppState>{...state, app: {...state.app, apiRequestOpen: false, foo: action.payload}}
        case types.DATA_REQUESTED:
            return <AppState>{...state, app: {...state.app, apiRequestOpen: true}}
        default:
            return state;
    }
};

export default appReducer;
