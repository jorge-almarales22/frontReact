import React from 'react';
import Login from './Login.jsx'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard.jsx';
import PrivateRoute from './Auth.jsx'
import Home from './Users/Home.jsx'
const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/dashboard" component={props => <PrivateRoute {...props} component={Dashboard}/>}/>
            <Route exact path="/usuarios" component={props => <PrivateRoute {...props} component={Home}/>}/>
        </Switch>
    </Router>
)
export default Routes;
