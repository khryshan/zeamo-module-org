'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var required = exports.required = function required(value) {
  return value ? undefined : 'Required';
};