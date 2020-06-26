import React from 'react';
import LogInFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import Footer from './footer/footer';

const Entry = () => (
    <>
        <LogInFormContainer />
        <SignupFormContainer />
        <Footer />
    </>
);

export default Entry;