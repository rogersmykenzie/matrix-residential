import React from 'react';
//routing imports
import {Switch, Route} from 'react-router-dom';
//component imports
import Intro from './components/Intro/Intro'
import Welcome from './components/Welcome/Welcome';
import Page from './components/Page/Page';

export default (
    <Switch>
        <Route path='/page/:pageNum/:num' component={Page} />
        <Route path='/page/:pageNum' component={Page} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/' component={Intro} />
    </Switch>
)