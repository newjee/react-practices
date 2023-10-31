import Header from './Header';
import Contents from './Contents';

import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Contents />
            </div>
        );
    }
}

export default App;