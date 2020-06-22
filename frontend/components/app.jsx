import React from 'react';
import LogInFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <AuthRoute path="/" component={LogInFormContainer} />
        </header>
            <AuthRoute path="/" component={SignupFormContainer} />
        <NavBarContainer />
    </div>
);

export default App;