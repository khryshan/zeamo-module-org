"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOAD = 'zeamo-organization-module/Jr/location/LOAD';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case LOAD:
      console.warn("Selected node", action.data);
      return action.data;
    default:
      return state;
  }
};

var load = exports.load = function load(data) {
  return { type: LOAD, data: data };
};

exports.default = reducer;