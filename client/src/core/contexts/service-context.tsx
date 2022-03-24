import React, { createContext } from "react";
import {IActionCreators} from "../actions/app-action-creators"
import {IDataService} from "../services/data.service";
import {IStorageService} from "../services/storage.service";

export function makeServiceProviderProps(actions:IActionCreators, data:IDataService, storage:IStorageService) {
    return {actions, data, storage}
}

interface IActionsContext {
    actions: any,
    data: any,
    storage: any
}
//
const obj:IActionsContext = {actions:{}, data:{}, storage:{}}


export const ServiceContext = createContext<IActionsContext>(obj);

export const ServiceContextProvider = (props:any) => {
    const value = {
      actions: props.value.actionServices,
      // auth: props.value.authService,
      data: props.value.dataService,
      storage: props.value.storageService
    };
    return (
        <ServiceContext.Provider value={value}>
            {props.children}
        </ServiceContext.Provider>
    );
};
