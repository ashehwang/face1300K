import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost, likePost, unlikePost } from '../../actions/post_actions';
import { openModal } from '../../actions/modal_actions';
import { createComment } from '../../actions/comment_action';

const mSTP = (state) => ({
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
});

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: (modal, referenceId) => dispatch(openModal(modal, referenceId)),
    createComment: comment => dispatch(createComment(comment)),
    likePost: postLike => dispatch(likePost(postLike)),
    unlikePost: likeId => dispatch(unlikePost(likeId))
});

export default connect(mSTP, mDTP)(PostIndex);