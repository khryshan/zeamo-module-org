'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeleteIcon = exports.RightIcon = exports.LeftIcon = exports.ArrowDropUpIcon = exports.ArrowDropDownIcon = exports.GymIcon = exports.LocationIcon = exports.UserIcon = exports.CompanyIcon = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    fill: '#4877f9',
    height: 24,
    width: 24
};

var Svg = function Svg(props) {
    return _react2.default.createElement(
        'svg',
        { style: Object.assign({}, style, props.style), viewBox: '0 0 24 24' },
        props.children
    );
};

var CompanyIcon = exports.CompanyIcon = function CompanyIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z' })
    );
};

var UserIcon = exports.UserIcon = function UserIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' })
    );
};

var LocationIcon = exports.LocationIcon = function LocationIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' })
    );
};

var GymIcon = exports.GymIcon = function GymIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z' })
    );
};

var ArrowDropDownIcon = exports.ArrowDropDownIcon = function ArrowDropDownIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
    );
};
var ArrowDropUpIcon = exports.ArrowDropUpIcon = function ArrowDropUpIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'M7 14l5-5 5 5z' })
    );
};
var LeftIcon = exports.LeftIcon = function LeftIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'm12.41,7.41l-1.41,-1.41l-6,6l6,6l1.41,-1.41l-4.58,-4.59l4.58,-4.59z' }),
        _react2.default.createElement('path', { d: 'm20.41,7.41l-1.41,-1.41l-6,6l6,6l1.41,-1.41l-4.58,-4.59l4.58,-4.59z' })
    );
};
var RightIcon = exports.RightIcon = function RightIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'm8,6l-1.41,1.41l4.58,4.59l-4.58,4.59l1.41,1.41l6,-6l-6,-6z' }),
        _react2.default.createElement('path', { d: 'm16,6l-1.41,1.41l4.58,4.59l-4.58,4.59l1.41,1.41l6,-6l-6,-6z' })
    );
};
var DeleteIcon = exports.DeleteIcon = function DeleteIcon(props) {
    return _react2.default.createElement(
        Svg,
        props,
        _react2.default.createElement('path', { d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' })
    );
};