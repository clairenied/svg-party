import React, { Component } from 'react';

import Hotdogman from './components/Hotdogman';

class App extends Component {
    render() {
        return (
            <div>
                <svg version="1.1"
                    baseProfile="full"
                    width="100vw" height="100vh"
                    fill="#b4e278"
                    xmlns="http://www.w3.org/2000/svg">
                    <Hotdogman />
                </svg>
            </div>
        );
    }
};

export default App;
