import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.session.id },
            entities: {
                users: { [window.currentUser.session.id]: window.currentUser.users[window.currentUser.session.id] }
            }
        }
        store=configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root)
    window.getState = store.getState;
    window.dispatch = store.dispatch;
})