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
                        <li><Link to="/user">User</Link></li>
                        <li><Link to="/home">Home</Link></li>
                    </ul>
                    <hr/>
                    <Route path="user" component={User}/>
                    <Route path="home" component={Home}/>
                </div>
            </Router>
        );
    }
}

render(<AppComponent/>, window.document.getElementById('app'));