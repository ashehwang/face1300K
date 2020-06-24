import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav className="navbar-container">
        <div className="searchbar">
          <form>
              <i className="fab fa-facebook-square"></i>
              <input type="text" placeholder="search for friends"/>
              <input type="submit" value="Search" />
          </form>
        </div>
        <h2>Hello, {this.props.currentUser.first_name}!</h2>
        <Link to={`/profile/${this.props.currentUser.id}`} >To Profile Page</Link>
        <button className="logout-button" onClick={this.props.logout}>
          Log Out
        </button>
      </nav>
    )
  }
}

export default NavBar;