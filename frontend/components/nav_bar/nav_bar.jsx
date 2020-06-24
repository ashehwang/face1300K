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
          <form className="searchform">
              <i className="fab fa-facebook"></i>
              <input type="text" placeholder="   search functionbook"/>
          </form>
        </div>
        <a href="/"><i className="fas fa-home"></i></a>
        <a href="#"><i className="fab fa-youtube-square"></i></a>
        <a href="#"><i className="fas fa-laptop-house"></i></a>
        <a href="#"><i className="fas fa-gamepad"></i></a>
        <div className="navbar-right">
          <Link to={`/profile/${this.props.currentUser.id}`} >          
              <div className="profile-small">
                {/* <img src="" alt="small-profile-picture" srcset="" /> */}
                <h2>Hello {this.props.currentUser.first_name}!</h2>
              </div>
          </Link>
          <a href="#"><i className="fas fa-plus"></i></a>
          <a href="#"><i className="fab fa-facebook-messenger"></i></a>
          <a href="#"><i className="fas fa-bell"></i></a>
          <a href="#"><i className="fas fa-caret-down"></i></a>
        </div>
        <button className="logout-button" onClick={this.props.logout}>
          Log Out
        </button>
      </nav>
    )
  }
}

export default NavBar;