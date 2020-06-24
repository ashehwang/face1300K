import { connect } from 'react-redux';
import Contacts from './contacts';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({

});

export default connect(mSTP, null)(Contacts)