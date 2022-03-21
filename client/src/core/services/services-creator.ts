import {dataService, IDataServiceConfig} from "./data.service";

export interface IServicesCreatorConfig {
    dataServiceConfig: IDataServiceConfig
}

export const ServicesCreator = {
    createServices: function (config:IServicesCreatorConfig) {
        const dataServiceConfig:IDataServiceConfig = {
            baseURL: config.dataServiceConfig.baseURL,
            requestConfig:config.dataServiceConfig.requestConfig
        };
        const dataServiceInstance = dataService(dataServiceConfig);
        return {
            "dataService": dataServiceInstance,
            "storageService": {}
        }
    }
};
