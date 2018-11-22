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

var LocationGym = function LocationGym(props) {
  return _react2.default.createElement(_formsUI.AssignForm, {
    data: props.gyms,
    dataSelected: props.gymsSelected,
    selected: props.locationGymsSelected,
    assigned: props.locationGyms,
    labelSearchAvailable: 'Available',
    labelSearchAssigned: 'Assigned',
    handleSearch: props.handleSearchGym,
    nameSelectAvailable: 'gyms',
    nameSelectAssigned: 'locationGyms',
    handleChange: props.handleSelectedGym,
    handleAddAll: props.handleAddAllGyms,
    handleAdd: props.handleAddGyms,
    handleRemove: props.handleRemoveGyms,
    handleRemoveAll: props.handleRemoveAllGyms
  });
};

LocationGym.propTypes = {
  locationGyms: _react2.default.PropTypes.array,
  gyms: _react2.default.PropTypes.array,
  locationGymsSelected: _react2.default.PropTypes.array,
  gymsSelected: _react2.default.PropTypes.array,
  handleSearchGym: _react2.default.PropTypes.func,
  handleSelectedGym: _react2.default.PropTypes.func,
  handleAddGyms: _react2.default.PropTypes.func,
  handleAddAllGyms: _react2.default.PropTypes.func,
  handleRemoveGyms: _react2.default.PropTypes.func,
  handleRemoveAllGyms: _react2.default.PropTypes.func
};
LocationGym = (0, _reduxForm.reduxForm)({
  form: 'LocationGym',
  enableReinitialize: true
})(LocationGym);
/*const mapStateToProps = (state) => ({
  initialValues: state.LocationGym,
});*/
exports.default = (0, _reactRedux.connect)(null, null, null, { withRef: true })(LocationGym);