import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    loggedIn: Boolean(state.session.id),
    friendRequests: state.entities.friendRequests
});

const mDTP = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default withRouter(connect(mSTP, mDTP)(NavBar));