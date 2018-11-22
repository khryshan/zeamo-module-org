'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPE_GYM = exports.TYPE_LOCATION = exports.TYPE_USER = exports.TYPE_COMPANY = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _icons = require('../../icons');

var _defaultStyles = require('../../defaultStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE_COMPANY = exports.TYPE_COMPANY = 'company';
var TYPE_USER = exports.TYPE_USER = 'user';
var TYPE_LOCATION = exports.TYPE_LOCATION = 'location';
var TYPE_GYM = exports.TYPE_GYM = 'gym';

var getIcon = function getIcon(type) {
  switch (type) {
    case TYPE_COMPANY:
      return _icons.CompanyIcon;
      break;
    case TYPE_USER:
      return _icons.UserIcon;
      break;
    case TYPE_LOCATION:
      return _icons.LocationIcon;
      break;
    case TYPE_GYM:
      return _icons.GymIcon;
      break;
    default:
      return _icons.LocationIcon;
  }
};
var Header = function Header(props) {
  //console.log(props)
  var Icon = getIcon(props.node.type);
  var style = {};
  if (props.node.isActive !== undefined && !props.node.isActive) style.fill = _defaultStyles.disabledColor;
  return _react2.default.createElement(
    _reactStyledFlexboxgrid.Col,
    { xs: 8, style: props.style.base },
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Row,
      null,
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Col,
        { xs: 2, style: props.style.icon },
        _react2.default.createElement(Icon, { style: style })
      ),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Col,
        { xs: 10, style: props.style.title },
        props.node ? props.node.name : ''
      )
    )
  );
};
exports.default = Header;