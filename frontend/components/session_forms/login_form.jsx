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

  renderErrors() {
    if (this.props.errors) {
      return (
        <ul className="login-error">
          {this.props.errors.map((error, idx) => (
            <li  key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    } else {
      return null;
    }
  }


    render() {
        return (
          <div className="login-form-container">
            <div className="mainlogo"><img src="https://i.ibb.co/s23rFxF/logo4.png" alt="logo" /></div>
            <div className="errors-box">{this.renderErrors()}</div>
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
        );
    }
}

export default LoginForm;