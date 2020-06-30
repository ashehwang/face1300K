import { connect } from 'react-redux';
import Contacts from './contacts';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
});

export default connect(mSTP, null)(Contacts)