import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPosts } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { makeFriendRequest } from '../../actions/friend_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
    openModal: modal => dispatch(openModal(modal)),
    makeFriendRequest: friendRequest => dispatch(makeFriendRequest(friendRequest))
});

export default connect(mSTP, mDTP)(Profile);