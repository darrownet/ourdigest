import * as types from "./app-action-types";
import {IDataService} from "../services/data.service";
import {IStorageService} from "../services/storage.service";
import {array} from "yup";
import {AxiosResponse} from "axios";

export interface IActionCreators {
    asyncDataReceived:Function,
    asyncDataRequest: Function
}

export interface IActionCreatorsParams {
    dataService: IDataService,
    storageService: IStorageService
}

export type AppAction = {
    type: string
    payload?: any;
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

    function asyncDataRequest(payload: any) {
        return (dispatch: DispatchType) => {
            dispatch({type: types.DATA_REQUESTED});
            const onError = (error:Error) => {
                console.log(error);
            }
            const onFail = (error:Error) => {
                console.log(error);
            }
            const onSuccess = (response:AxiosResponse) => {
                dispatch(asyncDataReceived(response.data));
            }
            dataService.get('/q/totalbc', payload).then(onSuccess, onFail).catch(onError);
        }
    }

    function asyncDataReceived(payload: object) {
        return {
            type: types.DATA_RECEIVED,
            payload,
        }
    }

    return {
        asyncDataReceived,
        asyncDataRequest
    }
}
