import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import ProfileContainer from './profile/profile_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import Entry from './entry';
import MainMenu from './main';



const App = () => (
    <div>
        <NavBarContainer />
        <Modal />
        <Switch>
            <Route path="/profile/:userId" component={ProfileContainer}/>
            <ProtectedRoute path="/main" component={MainMenu} />
            <AuthRoute path="/" component={Entry} />
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    </div>
);

export default App;

