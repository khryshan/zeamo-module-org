'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = require('react-flexbox-grid');

var _icons = require('../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var button = function button(node) {
    return node.toggled ? _react2.default.createElement(_icons.ArrowDropDownIcon, null) : _react2.default.createElement(_icons.ArrowDropUpIcon, null);
};
var Toggle = function Toggle(props) {
    // console.log(props)
    return _react2.default.createElement(
        _reactFlexboxGrid.Col,
        { xs: 4, style: props.style },
        props.node.children && props.node.children.length ? button(props.node) : null
    );
};
exports.default = Toggle;