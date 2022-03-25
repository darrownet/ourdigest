import * as types from "../../actions/app/app-action-types";
import {AppState, AppAction} from "../../actions/app/app-action-creators";

export const initialState: AppState = {
    apiRequestOpen: false,
    config: {},
    foo: ''
};

const appReducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case types.DATA_RECEIVED:
            return <AppState>{...state, ...{apiRequestOpen: false, foo: action.payload}}
        case types.DATA_REQUESTED:
            return <AppState>{...state, apiRequestOpen: true}
        default:
            return state;
    }
};

export default appReducer;
