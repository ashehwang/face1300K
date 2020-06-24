import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPosts } from '../../actions/post_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts)
});

const mDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
});

export default connect(mSTP, mDTP)(Profile);