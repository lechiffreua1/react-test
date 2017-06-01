import React from 'react';
import { render } from 'react-dom';

import { Home } from './components/Home';
import { User } from './components/User';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class AppComponent extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">User</Link></li>
                        <li><Link to="/home">Home</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="user" component={User}/>
                </div>
            </Router>
        );
    }
}

render(<AppComponent/>, window.document.getElementById('app'));