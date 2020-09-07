import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserPosts, deletePost, likePost, unlikePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { makeFriendRequest, deleteFriend } from '../../actions/friend_actions';
import { createComment } from '../../actions/comment_action';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    friends: Object.values(state.entities.friends)
});

const mDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId)),
    openModal: (modal, referenceId) => dispatch(openModal(modal, referenceId)),
    makeFriendRequest: friendRequest => dispatch(makeFriendRequest(friendRequest)),
    deletePost: postId => dispatch(deletePost(postId)),
    deleteFriend: friendId => dispatch(deleteFriend(friendId)),
    createComment: comment => dispatch(createComment(comment)),
    unlikePost: likeId => dispatch(unlikePost(likeId)),
    likePost: postLike => dispatch(likePost(postLike))
});

export default connect(mSTP, mDTP)(Profile);