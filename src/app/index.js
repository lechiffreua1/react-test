import React from 'react';
import { render } from 'react-dom';

import { Home } from './components/Home';
import { Header } from './components/Header';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<AppComponent/>, window.document.getElementById('app'));