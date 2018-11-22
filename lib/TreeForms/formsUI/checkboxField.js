'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _Checkbox = require('redux-form-material-ui/lib/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _reduxForm = require('redux-form');

var _defaultStyles = require('../../defaultStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxField = function CheckboxField(_ref) {
  var name = _ref.name,
      label = _ref.label;
  return _react2.default.createElement(
    _reactStyledFlexboxgrid.Row,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12, style: _defaultStyles.userFormStyles.checkboxWrapperStyle },
      _react2.default.createElement(_reduxForm.Field, {
        name: name,
        component: _Checkbox2.default,
        label: label,
        labelStyle: _defaultStyles.userFormStyles.checkboxLabelStyle
      })
    )
  );
};

exports.default = CheckboxField;