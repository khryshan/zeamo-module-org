'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _defaultStyles = require('../../defaultStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormWrapper = function FormWrapper(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: _defaultStyles.containerDialogTab },
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Row,
      null,
      children
    )
  );
};
exports.default = FormWrapper;