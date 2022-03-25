import {appActionCreators} from "../actions/app/app-action-creators";
import {dataService, IDataService, IDataServiceConfig} from "./data.service";
import {storageService, IStorageService} from "./storage.service";

export interface IServicesCreatorConfig {
    dataServiceConfig: IDataServiceConfig
}

export const ServicesCreator = {
    createServices: function (config:IServicesCreatorConfig) {
        const dataServiceConfig:IDataServiceConfig = {
            baseURL: config.dataServiceConfig.baseURL,
            requestConfig:config.dataServiceConfig.requestConfig
        };

        const dataServiceInstance:IDataService = dataService(dataServiceConfig);

        const storageServiceInstance:IStorageService = storageService();

        return {
            "actionServices": appActionCreators({
                dataService:dataServiceInstance,
                storageService: storageServiceInstance
            }),
            "dataService": dataServiceInstance,
            "storageService": storageServiceInstance
        }
    }
};
