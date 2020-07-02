import { connect } from 'react-redux';
import CreatePostForm from './create_post_form';
import { createPhotoPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
});

const mDTP = (dispatch) => ({
    createPhotoPost: formData => dispatch(createPhotoPost(formData)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(CreatePostForm);