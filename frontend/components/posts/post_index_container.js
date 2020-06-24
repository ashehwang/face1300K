import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(PostIndex);