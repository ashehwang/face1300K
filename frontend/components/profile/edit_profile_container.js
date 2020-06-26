import { connect } from 'react-redux';
import EditProfile from './edit_profile';
import { closeModal } from '../../actions/modal_actions';
import { editUser, fetchUser } from '../../actions/user_actions';

const mSTP = (state) => ({
    user: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
    editUser: (formData, userId) => dispatch(editUser(formData, userId)),
    closeModal: () => dispatch(closeModal()),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP, mDTP)(EditProfile);