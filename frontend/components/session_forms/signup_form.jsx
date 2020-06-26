import React from 'react';

class SignupForm extends React.Component {

    constructor(props){
        super(props);
        // const today = new Date();
        // const todayMonth = today.getMonth() + 1;
        // const todayYear = today.getFullYear() - 13;
        this.state = { first_name: "", last_name: "", email: "", password: "", gender: "", month: "", day: "", year: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(property){
        return e => this.setState({ [property] : e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        const fullBirthday = `${this.state.year}-${this.state.month}-${this.state.day}`;
        const newState = Object.assign({}, this.state, { "birthday": fullBirthday });
        this.props.signup(newState);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.loginDemoUser();
    }

    renderWarning(){
        return(
            <span><i className="fas fa-exclamation-circle"></i></span>
        )
    }

    render(){

        return(
        <main className="signup">
            <div className="signup-intro-container">
                <h2>Connect with friends and the world around you on functionbook.</h2>
                <ul className="signup-intro-list">
                    <li><i className="far fa-newspaper"></i><strong>See photos and updates</strong> from friends in News Feed.</li>
                    <li><i className="fas fa-network-wired"></i><strong>Share what's new</strong> in your life on your Timeline.</li>
                    <li><i className="fas fa-podcast"></i><strong>Find more</strong> of what you're looking for with functionbook Search.</li>
                </ul>
            </div>
            <div className="signup-form-container">
                <h2 className="signup-prop-1">Sign Up</h2>
                <h4 className="signup-prop-2">It's quick and easy.</h4>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div className="signup-fullname">
                            <input type="text" required id="firstName" placeholder="First name" value={this.state.first_name} onChange={this.update("first_name")} className={`${this.props.errors["first_name"] ? "error-red" : ""}`}/>
                            <input type="text" required id="lastName" placeholder="Last name" value={`${this.state.last_name}`} onChange={this.update("last_name")} className={`${this.props.errors["last_name"] ? "error-red" : ""}`}/>
                    </div>
                    <div className="signup-email" >
                            <input className={`${this.props.errors["email"] ? "error-red" : ""}`} type="email" required id="email" placeholder="Mobile number or email" value={this.state.email} onChange={this.update("email")} />
                    </div>
                    <div className="signup-password">
                            <input type="password" required id="password" minLength="6" placeholder="New password" value={this.state.password} onChange={this.update("password")} className={`${this.props.errors["password"] ? "error-red" : ""}`} />
                    </div>
                    <p className="signup-label">Birthday</p>
                        <label className={`signup-birthday${this.props.errors["birthday"] ? " error-red" : "" }`}>
                        <div className="signup-month">
                            <select required onChange={this.update("month")}>
                                <option disabled selected>Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="signup-day">
                            <select required onChange={this.update("day")}>
                                <option disabled selected >Day</option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                        </div>
                        <div className="signup-year">
                            <select required onChange={this.update("year")}>
                                <option disabled selected>Year</option>
                                <option value="1939">1939</option>
                                <option value="1940">1940</option>
                                <option value="1941">1941</option>
                                <option value="1942">1942</option>
                                <option value="1943">1943</option>
                                <option value="1944">1944</option>
                                <option value="1945">1945</option>
                                <option value="1946">1946</option>
                                <option value="1947">1947</option>
                                <option value="1948">1948</option>
                                <option value="1949">1949</option>
                                <option value="1950">1950</option>
                                <option value="1951">1951</option>
                                <option value="1952">1952</option>
                                <option value="1953">1953</option>
                                <option value="1954">1954</option>
                                <option value="1955">1955</option>
                                <option value="1956">1956</option>
                                <option value="1957">1957</option>
                                <option value="1958">1958</option>
                                <option value="1959">1959</option>
                                <option value="1960">1960</option>
                                <option value="1961">1961</option>
                                <option value="1962">1962</option>
                                <option value="1963">1963</option>
                                <option value="1964">1964</option>
                                <option value="1965">1965</option>
                                <option value="1966">1966</option>
                                <option value="1967">1967</option>
                                <option value="1968">1968</option>
                                <option value="1969">1969</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                    </label>
                    <p className="signup-label">Gender</p>
                        <div className={`${this.props.errors["gender"] ? "error-red" : ""} signup-gender`}>
                        <label>
                            <input type="radio" required name="sex" value="male" onChange={this.update("gender")} />   Male
                        </label>
                        <label>
                            <input type="radio" required name="sex" value="female" onChange={this.update("gender")} />   Female
                        </label>
                        <label>
                            <input type="radio" required name="sex" value="other" onChange={this.update("gender")} />   Other
                        </label>
                    </div>
                    <div className="signup-terms">
                        <p>
                            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                        </p>
                    </div>
                    <div className="signup-buttons">
                        <input className="signup-submit" type="submit" value="Sign Up" />
                        <input className="login-demo" type="submit" value="Demo User" onClick={this.handleDemoLogin}/>
                    </div>
                </form>
            </div>
        </main>
        )
    }
}

export default SignupForm;