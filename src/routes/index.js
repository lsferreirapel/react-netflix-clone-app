import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages import
import Home from '../pages/Home'
import TrailerPage from '../pages/TrailerPage'
import LoginPage from '../pages/LoginPage';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/trailer/:type/:id" component={TrailerPage}/>
    </Switch>
)

export default Routes;