import axios from "axios";

export interface IDataService {
    get:Function,
    post:Function
}

export interface IDataServiceConfig {
    baseURL: string,
    requestConfig?:object
}

export const dataService = (config: IDataServiceConfig):IDataService => {

    /* https://axios-http.com/docs/instance */

    const axiosInstance = axios.create({
        baseURL: config.baseURL,
        withCredentials: false,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    const requestConfig = config.requestConfig || {};

    return {
        get: (route:string = '', payload:object = {}) => {
            return axiosInstance.get(route, payload);
        },
        post: (route:string = '', payload:object = {}) => {
            return axiosInstance.post(route, payload, requestConfig);
        }
    }
}
