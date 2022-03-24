import * as types from "../actions/app-action-types";
import {AppState, AppAction} from "../actions/app-action-creators";

export const initialState: AppState = {
    app: {
        apiRequestOpen: false,
        config: {},
        foo: 'bar'
    }
};

const appReducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case types.DATA_REQUEST_OPEN:
            // return {...state,...{...state.app, ...{apiRequestOpen: true}}};
            return <AppState>{...state, app: {...state.app, apiRequestOpen: true}}
        default:
            return state;
    }
};

export default appReducer;
