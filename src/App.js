import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// import {Navbar, Footer} from './components';
import { Switch, Route } from 'react-router-dom';

import {Error, About, ReactJS} from './containers/pages';

class App extends Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/courses/react" component={ReactJS} />
                <Route component={Error} />
            </Switch>
            </>
        );
    }
}
export default App;