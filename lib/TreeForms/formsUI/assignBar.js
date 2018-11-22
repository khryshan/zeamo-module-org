'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _defaultStyles = require('../../defaultStyles');

var _icons = require('../../icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssignBar = function AssignBar(_ref) {
  var handleAddAll = _ref.handleAddAll,
      handleAdd = _ref.handleAdd,
      itemSelected = _ref.itemSelected,
      handleRemove = _ref.handleRemove,
      handleRemoveAll = _ref.handleRemoveAll,
      selected = _ref.selected;
  return _react2.default.createElement(
    _reactStyledFlexboxgrid.Col,
    { xs: 1 },
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Row,
      { around: 'xs', middle: 'xs' },
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Col,
        { xs: 12, style: _defaultStyles.assignBarStyles.firstRow },
        _react2.default.createElement(_RaisedButton2.default, {
          icon: _react2.default.createElement(_icons.LeftIcon, { style: _defaultStyles.assignBarStyles.icon }),
          fullWidth: true,
          onTouchTap: handleAddAll,
          buttonStyle: _defaultStyles.userFormStyles.submitButton
        })
      ),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Col,
        { xs: 12, style: _defaultStyles.assignBarStyles.row },
        _react2.default.createElement(_RaisedButton2.default, {
          icon: _react2.default.createElement(_chevronLeft2.default, { style: _defaultStyles.assignBarStyles.icon }),
          fullWidth: true,
          buttonStyle: _defaultStyles.userFormStyles.submitButton,
          onTouchTap: handleAdd
        })
      ),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Col,
        { xs: 12, style: _defaultStyles.assignBarStyles.row },
        _react2.default.createElement(_RaisedButton2.default, {
          icon: _react2.default.createElement(_chevronRight2.default, { style: _defaultStyles.assignBarStyles.icon }),
          fullWidth: true,
          onTouchTap: handleRemove,
          buttonStyle: _defaultStyles.userFormStyles.submitButton
        })
      ),
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Col,
        { xs: 12 },
        _react2.default.createElement(_RaisedButton2.default, {
          icon: _react2.default.createElement(_icons.RightIcon, { style: _defaultStyles.assignBarStyles.icon }),
          fullWidth: true,
          onTouchTap: handleRemoveAll,
          buttonStyle: _defaultStyles.userFormStyles.submitButton
        })
      )
    )
  );
};

exports.default = AssignBar;