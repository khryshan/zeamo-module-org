'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _location = require('./location');

var _location2 = _interopRequireDefault(_location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
  location: _location2.default,
  form: _reduxForm.reducer
});
var store = (window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore)(reducer);

exports.default = store;