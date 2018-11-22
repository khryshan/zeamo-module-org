'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _formsUI = require('./formsUI/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocationUsers = function LocationUsers(props) {
  return _react2.default.createElement(_formsUI.AssignForm, {
    data: props.users,
    dataSelected: props.usersSelected,
    selected: props.locationUsersSelected,
    assigned: props.locationUsers,
    labelSearchAvailable: 'Users',
    labelSearchAssigned: 'Assigned',
    handleSearch: props.handleSearchUser,
    nameSelectAvailable: 'users',
    nameSelectAssigned: 'locationUsers',
    handleChange: props.handleSelectedUser,
    handleAddAll: props.handleAddAllUsers,
    handleAdd: props.handleAddUsers,
    handleRemove: props.handleRemoveUsers,
    handleRemoveAll: props.handleRemoveAllUsers
  });
};

LocationUsers.propTypes = {
  users: _react2.default.PropTypes.array,
  locationUsers: _react2.default.PropTypes.array,
  locationUsersSelected: _react2.default.PropTypes.array,
  usersSelected: _react2.default.PropTypes.array,
  handleSearchUser: _react2.default.PropTypes.func,
  handleSelectedUser: _react2.default.PropTypes.func,
  handleAddUsers: _react2.default.PropTypes.func,
  handleAddAllUsers: _react2.default.PropTypes.func,
  handleRemoveUsers: _react2.default.PropTypes.func,
  handleRemoveAllUsers: _react2.default.PropTypes.func

};
LocationUsers = (0, _reduxForm.reduxForm)({
  form: 'LocationUsers',
  enableReinitialize: true
})(LocationUsers);
/*const mapStateToProps = (state) => ({
  initialValues: state.LocationUsers,
});*/
exports.default = (0, _reactRedux.connect)(null, null, null, { withRef: true })(LocationUsers);