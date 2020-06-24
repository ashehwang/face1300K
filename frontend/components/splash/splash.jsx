import React from 'react';

const Splash = ({ currentUser }) => (
    <aside>
        This is Splash.
        Hello, {currentUser.first_name}!
    </aside>
)

export default Splash;