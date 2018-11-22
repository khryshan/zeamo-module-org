'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _assignBar = require('./assignBar');

var _assignBar2 = _interopRequireDefault(_assignBar);

var _searchField = require('./searchField');

var _searchField2 = _interopRequireDefault(_searchField);

var _selectField = require('./selectField');

var _selectField2 = _interopRequireDefault(_selectField);

var _formWrapper = require('./formWrapper');

var _formWrapper2 = _interopRequireDefault(_formWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssignForm = function AssignForm(_ref) {
  var data = _ref.data,
      assigned = _ref.assigned,
      handleChange = _ref.handleChange,
      handleSearch = _ref.handleSearch,
      handleAddAll = _ref.handleAddAll,
      dataSelected = _ref.dataSelected,
      handleAdd = _ref.handleAdd,
      selected = _ref.selected,
      handleRemove = _ref.handleRemove,
      handleRemoveAll = _ref.handleRemoveAll,
      labelSearchAssigned = _ref.labelSearchAssigned,
      nameSelectAssigned = _ref.nameSelectAssigned,
      labelSearchAvailable = _ref.labelSearchAvailable,
      nameSelectAvailable = _ref.nameSelectAvailable;

  var NonUsed = data.filter(function (item) {
    return !assigned.find(function (used) {
      return used && used._id === item._id;
    });
  });
  return _react2.default.createElement(
    _formWrapper2.default,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 5 },
      _react2.default.createElement(_searchField2.default, { label: labelSearchAssigned, onChange: handleSearch }),
      _react2.default.createElement(_selectField2.default, { name: nameSelectAssigned, handleChange: handleChange, data: assigned })
    ),
    _react2.default.createElement(_assignBar2.default, {
      handleAddAll: handleAddAll,
      handleAdd: handleAdd,
      itemSelected: selected,
      selected: dataSelected,
      handleRemove: handleRemove,
      handleRemoveAll: handleRemoveAll
    }),
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 6 },
      _react2.default.createElement(_searchField2.default, { label: labelSearchAvailable, onChange: handleSearch }),
      _react2.default.createElement(_selectField2.default, { name: nameSelectAvailable, handleChange: handleChange, data: NonUsed })
    )
  );
};
exports.default = AssignForm;