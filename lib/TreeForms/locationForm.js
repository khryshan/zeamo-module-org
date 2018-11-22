'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _defaultStyles = require('../defaultStyles');

var _reduxForm = require('redux-form');

var _formsUI = require('./formsUI');

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Location = function Location(props) {
  return _react2.default.createElement(
    _formsUI.FormWrapper,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12 },
      _react2.default.createElement(_formsUI.TextField, {
        name: 'name',
        required: true,
        hintText: 'Location Name',
        floatingLabel: 'Location Name'
      }),
      _react2.default.createElement(_formsUI.TextField, {
        fullWidth: true,
        name: 'description',
        hintText: 'Description',
        multiLine: true,
        rows: 3,
        rowsMax: 4,
        maxLength: 150,
        floatingLabelText: 'Description'
      }),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        null,
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12 },
          _react2.default.createElement(_formsUI.CheckboxField, { name: 'isActive', label: 'Active' })
        ),
        (props.isAdmin || props.showDeleteButton) && _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, style: _defaultStyles.deleteButtonStyles.wrapper },
          _react2.default.createElement(_FlatButton2.default, {
            label: 'Delete node',
            disabled: !props.initialValues._id,
            labelStyle: _defaultStyles.deleteButtonStyles.label,
            icon: _react2.default.createElement(_icons.DeleteIcon, { style: _defaultStyles.deleteButtonStyles.icon }),
            onClick: function onClick() {
              return props.onSubmit(props.id, 'delete');
            }
          })
        )
      )
    )
  );
};

Location.propTypes = {
  id: _react2.default.PropTypes.string.isRequired,
  isAdmin: _react2.default.PropTypes.bool,
  showDeleteButton: _react2.default.PropTypes.bool
};
Location = (0, _reduxForm.reduxForm)({
  form: 'Location',
  enableReinitialize: true
})(Location);
var mapStateToProps = function mapStateToProps(state) {
  return {
    initialValues: state.location,
    id: state.location._id
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(Location);