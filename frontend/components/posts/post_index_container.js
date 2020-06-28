import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { createComment } from '../../actions/comment_action';

const mSTP = (state) => ({
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    comment: state.entities.comments
});

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mSTP, mDTP)(PostIndex);