'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(props) {
    //console.log(props)
    return _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        { onClick: props.onClick, style: Object.assign({}, props.style.base, props.node.active ? props.style.baseActive : {}) },
        _react2.default.createElement(props.decorators.Header, _extends({}, props, { style: props.style.header })),
        _react2.default.createElement(props.decorators.Toggle, _extends({}, props, { style: props.style.toggle }))
    );
};
exports.default = Container;