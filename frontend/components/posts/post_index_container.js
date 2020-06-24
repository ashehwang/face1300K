import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mSTP = (state) => ({
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
});

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mSTP, mDTP)(PostIndex);