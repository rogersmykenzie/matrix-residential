import React from 'react';
//routing imports
import {Switch, Route} from 'react-router-dom';
//component imports
import Intro from './components/Intro/Intro';
import Page from './components/Page/Page';
import ExtraRooms from "./components/ExtraRooms/ExtraRooms";
import FormPath from "./components/FormPath/FormPath";

export default (
    <Switch>
        <Route path='/page/:pageNum/:roomNum' component={Page} />
        <Route path='/page/:pageNum' component={Page} />
        <Route path="/rooms/extra" component={ExtraRooms} />
        <Route path='/welcome' component={Intro} />
        <Route exact path='/' component={FormPath} />
        {/* <Route component={Error} /> */}
    </Switch>
)