import { connect } from 'react-redux';
import CreatePostForm from './create_post_form';
import { createPost, createPhotoPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post)),
    createPhotoPost: formData => dispatch(createPhotoPost(formData)),
    closeModal: () => dispatch(closeModal()),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(CreatePostForm);