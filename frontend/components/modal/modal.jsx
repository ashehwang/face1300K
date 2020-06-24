import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreatePostFormContainer from '../posts/create_post_form_container';

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'createpost':
            component = <CreatePostFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

const mSTP = (state) => ({
    modal: state.ui.modal
});

const mDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal);