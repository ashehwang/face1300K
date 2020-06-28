import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';

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
    
    if(!this.props.loggedIn || !this.props.currentUser) {
      return null;
    }

    const hidden = this.state.dropdown ? "" : "hidden";
    const prpUrl = this.props.currentUser.profilePhotoUrl ? this.props.currentUser.profilePhotoUrl : "https://i.ibb.co/wzjv56z/5cc28e190d41d2738de6.jpg";
    
    return(
      <nav className="navbar-container">
        <SearchBarContainer />
        {/* <div className="searchbar">
          <form className="searchform">
              <Link to="/"><i className="fab fa-facebook"></i></Link>
            <input type="text" placeholder="   	search &int;book"/>
          </form>
        </div> */}
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
              <div className="dropdown-box">
                <div className="dropdown-profile">
                  <Link to={`/profile/${this.props.currentUser.id}`}>
                    <img src={prpUrl} className="dropdown-profile-pic"/>
                    <div className="dropdown-profile-detail" >
                      <h1>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
                      <p>See your profile</p>
                    </div>
                  </Link>
                </div>
                <div className="line"></div>
                <div className="dropdown-feedback">
                  <div className="dropdown-feedback-icon"><i className="fas fa-envelope-open-text"></i></div>
                  <div className="dropdown-feeback-text">
                    <h1>Give Feedback</h1>
                    <p>Help us improve this functionbook</p>
                  </div>
                </div>
                <div className="line"></div>
                <div className="dropdown-logout" onClick={this.props.logout}>
                  <div className="dropdown-feedback-icon"><i className="fas fa-sign-out-alt"></i></div>
                  <div className="dropdown-logout-text">Log Out</div>
                </div>
                <div className="line"></div>
                <div className="dropdown-terms">
                  Privacy &middot; Terms &middot; Advertising &middot; Ad Choices &middot; Cookies &middot; More &middot; functionbook &copy; 2020
                </div>
              </div>
            </div>
          </div >
        </div>
      </nav>
    )
  }
}

export default NavBar;