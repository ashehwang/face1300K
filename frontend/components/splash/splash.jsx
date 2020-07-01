import React from 'react';

const Splash = ({ currentUser }) => (
    <aside>
        <div className="splash-container">
            <div><i className="fas fa-star"></i></div>
            <div className="introduction">
                <p>Hello, {currentUser.first_name}! Thank you for visiting functionbook. My name is Ashe and I've made this as a way to practice understanding full stack development. This is the first website that I ever made, so there may be functions that are missing compared with the original facebook. But I personally find beauty in simplicity. I hope you enjoy. If you're interested in reaching out to me, there is a link to my github. Thank you! - Ashe</p>
            </div>            
        </div>
    </aside>
)

export default Splash;