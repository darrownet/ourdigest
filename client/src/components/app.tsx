import React from 'react';
import Header from "./header/header";
import Footer from "./footer/footer";
import Placeholder from "../images/placeholder.png";

const App = () => {

    return (
        <div>
            <Header title="Hello World!" />
            <p>I'm Alive!</p>
            <img src={Placeholder}/>
            <Footer />
        </div>
    );
};

export default App;
