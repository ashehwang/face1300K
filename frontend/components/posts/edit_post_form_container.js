import { connect } from 'react-redux';
import EditPostForm from './edit_post_form';
import { updatePost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    updatePost: (formData, id) => dispatch(updatePost(formData, id)),
    closeModal: () => dispatch(closeModal())
});

export default connect (mSTP, mDTP)(EditPostForm);