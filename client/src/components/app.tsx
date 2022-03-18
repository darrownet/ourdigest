import React from 'react';

import Placeholder from "../images/placeholder.png";

interface AppProps {};

const App = (props: AppProps) => {

    return (
        <div>
            <p>Hello World!</p>
            <img src={Placeholder}/>
        </div>
    );
};

export default App;
