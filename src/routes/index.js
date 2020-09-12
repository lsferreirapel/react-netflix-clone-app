import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages import
import Home from '../pages/Home'
import TrailerPage from '../pages/TrailerPage'

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/trailer/:type/:id" component={TrailerPage}/>
    </Switch>
)

export default Routes;