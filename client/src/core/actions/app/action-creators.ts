import * as types from "./action-types";

interface IApp {
    apiRequestOpen: boolean,
    config: object,
    foo: string
}

export type AppAction = {
    type: string
    payload: object
};

export type AppState = {
    app: IApp
};

export type DispatchType = (args: AppAction) => AppAction;

export function asyncRequestData(payload:object) {
    const action: AppAction = {
        type: types.DATA_REQUEST_OPEN,
        payload,
    }
    return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: AppAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 3000);
    }
}
