import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogInFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreatePostFormContainer from './posts/create_post_form_container';
import PostIndexContainer from './posts/post_index_container';
import Footer from './footer/footer';
import Modal from './modal/modal';
import SplashContainer from './splash/splash_container';
import ProfileContainer from './profile/profile_container';
import ContactsContainer from './contacts/contacts-container';
import EditProfileContainer from './profile/edit_profile_container';


const App = () => (
    <div>
            <AuthRoute path="/" component={LogInFormContainer} />
            <AuthRoute path="/" component={SignupFormContainer} />
            <AuthRoute path="/" component={Footer} />
            <ProtectedRoute path = "/" component={NavBarContainer} />
            <Route path="/profile/:userId/edit" component={EditProfileContainer} />
        <article className="function-main">
            <Modal />
            <ProtectedRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path="/" component={PostIndexContainer} />
            <ProtectedRoute exact path="/" component={ContactsContainer} />  
        </article>
            <Route exact path="/profile/:userId" component={ProfileContainer}/>
        <Switch>
            <Route path="/" render={() => null}/>
            <Route path="/profile/:userId" render={() => null}/>
            <Route path="/profile/:userId/edit" render={() => null}/>
            <Route render={() => <Redirect to="/" />}/>
        </Switch>
    </div>
);

export default App;

