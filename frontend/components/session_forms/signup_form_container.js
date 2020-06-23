import { connect } from 'react-redux';
import { signup, loginDemoUser } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mSTP = (state) => ({
    errors: state.errors.session
});

const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signup(user)),
    loginDemoUser: () => dispatch(loginDemoUser())
});

export default connect(mSTP, mDTP)(SignupForm);