import {dataService, IDataServiceConfig} from "./data.service";
import {storageService} from "./storage.service";

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

        const storageServiceInstance = storageService();

        return {
            "dataService": dataServiceInstance,
            "storageService": storageServiceInstance
        }
    }
};
