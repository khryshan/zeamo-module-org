import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { AssignForm } from './formsUI/';

let LocationUsers = (props) => (
  <AssignForm
    data={props.users}
    dataSelected={props.usersSelected}
    selected={props.locationUsersSelected}
    assigned={props.locationUsers}
    labelSearchAvailable="Users"
    labelSearchAssigned="Assigned"
    handleSearch={props.handleSearchUser}
    nameSelectAvailable="users"
    nameSelectAssigned="locationUsers"
    handleChange={props.handleSelectedUser}
    handleAddAll={props.handleAddAllUsers}
    handleAdd={props.handleAddUsers}
    handleRemove={props.handleRemoveUsers}
    handleRemoveAll={props.handleRemoveAllUsers}
  />
);


LocationUsers.propTypes = {
  users: React.PropTypes.array,
  locationUsers: React.PropTypes.array,
  locationUsersSelected: React.PropTypes.array,
  usersSelected: React.PropTypes.array,
  handleSearchUser: React.PropTypes.func,
  handleSelectedUser: React.PropTypes.func,
  handleAddUsers: React.PropTypes.func,
  handleAddAllUsers: React.PropTypes.func,
  handleRemoveUsers: React.PropTypes.func,
  handleRemoveAllUsers: React.PropTypes.func,

};
LocationUsers = reduxForm({
  form: 'LocationUsers',
  enableReinitialize: true,
})(LocationUsers);
/*const mapStateToProps = (state) => ({
  initialValues: state.LocationUsers,
});*/
export default connect(
  null,
  null,
  null,
  { withRef: true })(LocationUsers);
