import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  constructor(props){
    super(props);
    this.state = { dropdown: false };
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown (e) {
    e.preventDefault();
    this.setState({ dropdown: !this.state.dropdown });
  }
  

  render(){

    const hidden = this.state.dropdown ? "" : "hidden";

    return(
      <nav className="navbar-container">
        <div className="searchbar">
          <form className="searchform">
              <Link to="/"><i className="fab fa-facebook"></i></Link>
            <input type="text" placeholder="   	search &int;book"/>
          </form>
        </div>
        <div className="squarebutton">
          <Link to="/"><i className="fas fa-home"></i></Link>
        </div>
        <div className="squarebutton">
          <a href="#"><i className="fab fa-youtube-square"></i></a>
        </div>
        <div className="squarebutton">
          <a href="#"><i className="fas fa-laptop-house"></i></a>
        </div >
        <div className="squarebutton">
          <a href="#"><i className="fas fa-gamepad"></i></a>
        </div>
        <div className="navbar-right">
          <Link to={`/profile/${this.props.currentUser.id}`} >          
              <div className="profile-small">
                {/* <img src="" alt="small-profile-picture" srcset="" /> */}
                <h2>Hello {this.props.currentUser.first_name}!</h2>
              </div>
          </Link>
          <div className="roundbutton">
            <a href="#"><i className="fas fa-plus"></i></a>
          </div>
          <div className="roundbutton">
            <a href="#"><i className="fab fa-facebook-messenger"></i></a>
          </div>
          <div className="roundbutton">
            <a href="#"><i className="fas fa-bell"></i></a>
          </div>
          <div className="roundbutton">
            <a><i className="fas fa-caret-down" onClick={this.handleDropdown}></i></a>
            <div className={`dropdown ${hidden}`}>
              <span onClick={this.props.logout}>LogOut</span>
            </div>
          </div >
        </div>
      </nav>
    )
  }
}

export default NavBar;