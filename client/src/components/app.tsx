import React, {useState, useEffect} from 'react';
import axios from "axios";

import {ServicesCreator, IServicesCreatorConfig} from "../core/services/services-creator";
import {ServiceContextProvider} from "../core/contexts/service-context";

import Header from "./header/header";
import Footer from "./footer/footer";
import Placeholder from "../images/placeholder.png";

const App = () => {
    return (
        <div>
            <Header title="Hello World!"/>
            <p>I'm Alive!</p>
            <img src={Placeholder}/>
            <Footer/>
        </div>
    );
};

export interface IFileConfig {
    appVersion: string,
    servicesConfig: IServicesCreatorConfig
}

const StrappedApp = () => {
    const [fileConfig, setFileConfig] = useState<IFileConfig | null>(null);
    const onSuccess = (result: any) => {
        setFileConfig(result.data)
    }
    const onFailure = (error: any) => {
        console.error("Config Load Error:", error.message);
        setFileConfig(null);
    }
    useEffect(() => {
        axios.get("/config.json").then(onSuccess, onFailure);
    }, []);
    if (fileConfig) {
        const services = ServicesCreator.createServices(fileConfig.servicesConfig || {});
        return (
            <ServiceContextProvider value={services}>
                <App />
            </ServiceContextProvider>
        );
    } else {
        return (<>;(</>);
    }
};

export default StrappedApp;
