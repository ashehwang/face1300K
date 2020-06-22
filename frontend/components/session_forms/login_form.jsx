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
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

    render() {
        return (
          <div className="login-form-container">
            <div className="mainlogo"> logo will be here </div>
            <div className="errors-box">{this.renderErrors()}</div>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="login-email">
                  Email
                  <br/>
                  <input type="text" value={this.state.email} onChange={this.update("email")}/>
              </div>
              <div className="login-password">
                  Password
                  <br />
                  <input type="password" value={this.state.password} onChange={this.update("password")}/>
              </div>
              <div className="login-submit">
                <br />
                <button>Log In</button>
              </div>
            </form>
          </div>
        );
    }
}

export default LoginForm;