'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TYPE_GYM = exports.TYPE_LOCATION = exports.TYPE_USER = exports.TYPE_COMPANY = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = require('react-flexbox-grid');

var _icons = require('../icons');

var _toggle = require('./toggle');

var _toggle2 = _interopRequireDefault(_toggle);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var decorators = {
    Loading: function Loading(props) {
        return _react2.default.createElement(
            'div',
            { style: props.style },
            'loading...'
        );
    },
    Toggle: _toggle2.default,
    Header: _header2.default,
    Container: _container2.default
};
exports.TYPE_COMPANY = _header.TYPE_COMPANY;
exports.TYPE_USER = _header.TYPE_USER;
exports.TYPE_LOCATION = _header.TYPE_LOCATION;
exports.TYPE_GYM = _header.TYPE_GYM;
exports.default = decorators;