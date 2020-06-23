import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

function Modal({ modal, closeModal }) {

    if (!modal) {
        return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                component comes here
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