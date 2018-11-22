'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = require('react-flexbox-grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectField = function SelectField(_ref) {
  var data = _ref.data,
      name = _ref.name,
      handleChange = _ref.handleChange;
  return _react2.default.createElement(
    _reactFlexboxGrid.Row,
    null,
    _react2.default.createElement(
      _reactFlexboxGrid.Col,
      { xs: 12 },
      _react2.default.createElement(
        'select',
        {
          multiple: true,
          'data-type': 0,
          name: name,
          style: { width: '100%', height: '40vh' },
          onChange: handleChange
        },
        data.map(function (item, i) {
          return item ? _react2.default.createElement(
            'option',
            {
              key: i,
              style: { padding: '10px 0px 10px 20px', fontSize: '16px' },
              value: item._id
            },
            item.name
          ) : null;
        })
      )
    )
  );
};

exports.default = SelectField;