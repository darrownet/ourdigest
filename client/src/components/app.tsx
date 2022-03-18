import React, {useState, useEffect} from 'react';
import axios from "axios";

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

const StrappedApp = () => {
    const [fileConfig, setFileConfig] = useState(null);
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
    return (fileConfig ? <App /> : <></>);
};

export default StrappedApp;
