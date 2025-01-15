import React, { Component } from "react";

import '../styles/App.css';
import HelloWorld from "./HelloWorld";

class App extends Component {
    
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <HelloWorld />
            </div>
        );
    }
}

export default App;
