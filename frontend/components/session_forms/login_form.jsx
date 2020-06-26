import React from 'react';

class LoginForm extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { email: "", password: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    update(field){
        return e => this.setState({ [field]: e.currentTarget.value });
    }

  // renderErrors() {
  //   if (this.props.errors) {
  //     return (
  //       <div className="login-error">
  //         {Object.values(this.props.errors).map((error, idx) => <span key={idx}> {error}</span>)}
  //       </div>
  //     )
  //   } else {
  //     return null;
  //   }
  // }

  renderErrors() {
    if(this.props.errors['login']){
      return(
        <div className="login-error-box">
          <span><i className="fas fa-exclamation-circle"></i>  {this.props.errors["login"]}</span>
        </div>
      )
    } else if(this.props.errors["email"]){
      return(
        <div className="email-error-box">
          <span><i className="fas fa-exclamation-circle"></i>{this.props.errors["email"]}</span>
        </div>
      )
    } else {
      return null;
    }
  }

    render() {
        return (
          <header>
            <div className="login-form-container">
              <div className="mainlogo"><a href="/"><img src="https://i.ibb.co/s23rFxF/logo4.png" alt="logo" /></a></div>
              {this.renderErrors()}
              <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="login-email">
                    <p className="label-login">Email or Phone</p>
                    <input type="text" value={this.state.email} onChange={this.update("email")}/>
                </div>
                <div className="login-password">
                    <p className="label-login">Password</p>
                    <input type="password" value={this.state.password} onChange={this.update("password")}/>
                </div>
                <div className="login-submit">
                  <button>Log In</button>
                </div>
              </form> 
            </div>
          </header>
        );
    }
}

export default LoginForm;