import React from 'react';
import LogInFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreatePostFormContainer from './posts/create_post_form_container';
import PostIndexContainer from './posts/post_index_container';
import Footer from './footer/footer';


const App = () => (
    <div>
        <header>
            <AuthRoute path="/" component={LogInFormContainer} />
        </header>
            <AuthRoute path="/" component={SignupFormContainer} />
            <AuthRoute path="/" component={Footer} />
        <NavBarContainer />
        <ProtectedRoute path="/" component={CreatePostFormContainer} />
        <ProtectedRoute path="/" component={PostIndexContainer} />
    </div>
);

export default App;

