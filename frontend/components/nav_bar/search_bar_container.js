import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { clearUserSearch, fetchSearchedUsers } from '../../actions/search_actions';
import { withRouter } from 'react-router-dom';


const mSTP = (state) => ({
    users: Object.values(state.entities.search)
});

const mDTP = (dispatch) => ({
    clearUserSearch: () => dispatch(clearUserSearch()),
    fetchSearchedUsers: filter => dispatch(fetchSearchedUsers(filter))
});

export default connect(mSTP, mDTP)(SearchBar);