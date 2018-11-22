'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _reduxForm = require('redux-form');

var _TextField = require('redux-form-material-ui/lib/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _defaultStyles = require('../../defaultStyles');

var _validations = require('../validations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextField = function TextField(_ref) {
  var name = _ref.name,
      hintText = _ref.hintText,
      floatingLabel = _ref.floatingLabel,
      required = _ref.required,
      extra = _objectWithoutProperties(_ref, ['name', 'hintText', 'floatingLabel', 'required']);

  return _react2.default.createElement(
    _reactStyledFlexboxgrid.Row,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12 },
      _react2.default.createElement(_reduxForm.Field, _extends({
        fullWidth: true,
        name: name,
        component: _TextField2.default,
        hintText: hintText,
        floatingLabelFixed: true,
        parse: function parse(b) {
          return b.replace(/\s\s+/g, ' ');
        },
        floatingLabelStyle: _defaultStyles.userFormStyles.floatingLabelText,
        floatingLabelText: floatingLabel
      }, extra, {
        validate: required ? _validations.required : undefined
      }))
    )
  );
};

exports.default = TextField;