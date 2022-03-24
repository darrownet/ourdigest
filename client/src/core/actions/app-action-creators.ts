import * as types from "./app-action-types";
import {IDataService} from "../services/data.service";
import {IStorageService} from "../services/storage.service";

export interface IActionCreators {
    asyncRequestData: Function
}

export interface IActionCreatorsParams {
    dataService: IDataService,
    storageService: IStorageService
}

export type AppAction = {
    type: string
    payload: object
};

export type AppState = {
    app: {
        apiRequestOpen: boolean,
        config: object,
        foo: string
    }
};

export type DispatchType = (args: AppAction) => AppAction;

export function appActionCreators(params: IActionCreatorsParams): IActionCreators {
    const {dataService, storageService} = params;

    function asyncRequestData(payload: object) {
        const action: AppAction = {
            type: types.DATA_REQUEST_OPEN,
            payload,
        }
        return simulateHttpRequest(action);
    }

    function simulateHttpRequest(action: AppAction) {
        return (dispatch: DispatchType) => {
            setTimeout(() => {
                dispatch(action)
            }, 500);
        }
    }

    return {
        asyncRequestData
    }
}
