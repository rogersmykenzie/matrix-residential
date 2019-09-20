import React from 'react';
//routing imports
import {Switch, Route} from 'react-router-dom';
//component imports
import Intro from './components/Intro/Intro'
import Welcome from './components/Welcome/Welcome';
import Page from './components/Page/Page';
import Error from "./components/Error/Error";
import ExtraRooms from "./components/ExtraRooms/ExtraRooms";

export default (
    <Switch>
        <Route path='/page/:pageNum/:roomNum' component={Page} />
        <Route path='/page/:pageNum' component={Page} />
        <Route path="/rooms/extra" component={ExtraRooms} />
        <Route path='/welcome' component={Welcome} />
        <Route exact path='/' component={Intro} />
        <Route component={Error} />
    </Switch>
)