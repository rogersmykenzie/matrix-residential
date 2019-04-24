import React from 'react';
//routing imports
import {Switch, Route} from 'react-router-dom';
//component imports
import Intro from './components/Intro/Intro'
import Welcome from './components/Welcome/Welcome';

export default (
    <Switch>
        <Route path='/welcome' component={Welcome} />
        <Route path='/' component={Intro} />
    </Switch>
)