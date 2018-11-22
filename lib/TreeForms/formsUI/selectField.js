'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectField = function SelectField(_ref) {
  var data = _ref.data,
      name = _ref.name,
      handleChange = _ref.handleChange;
  return _react2.default.createElement(
    _reactStyledFlexboxgrid.Row,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
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
              key: item._id,
              style: { padding: '10px 0px 10px 20px', fontSize: '16px' },
              value: item._id,
              title: item.title,
              selected: item.selected
            },
            item.name
          ) : null;
        })
      )
    )
  );
};

exports.default = SelectField;