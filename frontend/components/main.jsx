import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SplashContainer from './splash/splash_container';
import PostIndexContainer from './posts/post_index_container';
import ContactsContainer from './contacts/contacts-container';

const MainMenu = () => (
    <>
            <NavBarContainer />
        <article className="function-main">
            <SplashContainer />
            <PostIndexContainer />
            <ContactsContainer />
        </article>
    </>
)

export default MainMenu;