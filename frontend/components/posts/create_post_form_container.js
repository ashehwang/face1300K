import { connect } from 'react-redux';
import CreatePostForm from './create_post_form';
import { createPost, createPhotoPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mDTP = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post)),
    createPhotoPost: formData => dispatch(createPhotoPost(formData)),
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mDTP)(CreatePostForm);