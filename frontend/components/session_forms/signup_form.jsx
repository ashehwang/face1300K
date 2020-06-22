import React from 'react';

class SignupForm extends React.Component {

    constructor(props){
        super(props);
        this.state = { first_name: "First name", last_name: "Last name", email: "Mobile number or email", password: "New password", birthday: "", gender: "", month: "", day: "", year: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property){
        return e => this.setState({ [property] : e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        const fullBirthday = `${this.state.year}-${this.state.month}-${this.state.day}`;
        this.setState({ "birthday": fullBirthday });
        console.log(this.state);
        this.props.signup(this.state);
    }

    render(){

        return(
        <main className="signup">
            <div className="signup-intro-container">
                <h2>Connect with friends and the world around you on functionbook.</h2>
                <ul className="signup-intro-list">
                    <li><strong>See photos and updates</strong> from friends in News Feed.</li>
                    <li><strong>Share what's new</strong> in your life on your Timeline.</li>
                    <li><strong>Find more</strong> of what you're looking for with functionbook Search.</li>
                </ul>
            </div>
            <div className="signup-form-container">
                <h2 className="signup-prop-1">Sign Up</h2>
                <h4 className="signup-prop-2">It's quick and easy.</h4>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div className="signup-fullname">
                            <input type="text" value={this.state.first_name} onChange={this.update("first_name")} />
                            <input type="text" value={this.state.last_name} onChange={this.update("last_name")} />
                    </div>
                    <input type="text" value={this.state.email} onChange={this.update("email")} />
                    <input type="password" value={this.state.password} onChange={this.update("password")} />
                    <label className="signup-birthday-label">Birthday
                        <div className="signup-month">
                            <select onChange={this.update("month")}>
                                <option disabled defaultValue >Month</option>
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
                            <select onChange={this.update("day")}>
                                <option disabled defaultValue >Day</option>
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
                            <select onChange={this.update("year")}>
                                <option disabled defaultValue>Year</option>
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
                    <label className="signup-gender-label">Gender
                        <label>Male
                            <input type="radio" value="male" onChange={this.update("gender")} />
                        </label>
                        <label>Female
                            <input type="radio" value="female" onChange={this.update("gender")} />
                        </label>
                        <label>Other
                            <input type="radio" value="other" onChange={this.update("gender")} />
                        </label>
                    </label>
                    <div className="signup-terms">
                        <p>
                            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.
                        </p>
                    </div>
                    <input className="signup-submit" type="submit" value="Sign Up" />
                </form>
            </div>
        </main>
        )
    }
}

export default SignupForm;