'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _reduxForm = require('redux-form');

var _formsUI = require('./formsUI');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LocationChild = function LocationChild() {
  return _react2.default.createElement(
    _formsUI.FormWrapper,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12 },
      _react2.default.createElement(_formsUI.TextField, {
        name: 'name',
        hintText: 'Location Name',
        required: true,
        floatingLabel: 'Location Name'
      }),
      _react2.default.createElement(_formsUI.TextField, {
        name: 'description',
        hintText: 'Description',
        multiLine: true,
        rows: 3,
        rowsMax: 4,
        maxLength: 150,
        floatingLabel: 'Description'
      })
    )
  );
};

LocationChild = (0, _reduxForm.reduxForm)({
  form: 'LocationChild',
  enableReinitialize: true
})(LocationChild);
exports.default = (0, _reactRedux.connect)(null, null, null, { withRef: true })(LocationChild);