import React from 'react';

const NavBar = ({ currentUser, logout }) => {
  
  const NotLoggedIn = () => (
    <nav>
        you are not logged in
    </nav>
  );

  const LoggedInGreetings = () => (
    <div>
      <h2>Hello, { currentUser.first_name }!</h2>
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
    </div>
  );

  return currentUser ? LoggedInGreetings() : NotLoggedIn();

};

export default NavBar;