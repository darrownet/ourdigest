import React, { createContext } from "react"

export function makeServiceProviderProps(actions:any, data:any, storage:any) {
    return {actions, data, storage}
}

export const ServiceContext = createContext({});

export const ServiceContextProvider = (props:any) => {
    const value = {
      actions: props.value.actionServices,
      auth: props.value.authService,
      data: props.value.dataService,
      storage: props.value.storage
    };
    return (
        <ServiceContext.Provider value={value}>
            {props.children}
        </ServiceContext.Provider>
    );
};
