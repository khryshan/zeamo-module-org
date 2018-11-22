'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _TextField = require('redux-form-material-ui/lib/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _defaultStyles = require('../../defaultStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchField = function (_Component) {
  _inherits(SearchField, _Component);

  function SearchField(props) {
    _classCallCheck(this, SearchField);

    var _this = _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call(this, props));

    _this.filterValueTimer = undefined;
    _this.handleSearch = _this.handleSearch.bind(_this);
    return _this;
  }

  _createClass(SearchField, [{
    key: 'handleSearch',
    value: function handleSearch(event, newValue) {
      var _this2 = this;

      clearTimeout(this.filterValueTimer);
      this.filterValueTimer = setTimeout(function () {
        _this2.props.onChange(event, _this2.props.label, newValue);
      }, 700);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          onChange = _props.onChange,
          onlyInput = _props.onlyInput;

      var SearchInput = _react2.default.createElement(
        'div',
        { style: _defaultStyles.searchFieldStyles.wrapper },
        _react2.default.createElement(_search2.default, { style: _defaultStyles.searchFieldStyles.icon }),
        _react2.default.createElement(_TextField2.default, {
          hintText: label,
          fullWidth: true,
          inputStyle: _defaultStyles.searchFieldStyles.input,
          hintStyle: _defaultStyles.searchFieldStyles.input,
          onChange: this.handleSearch
        })
      );
      var Wrapper = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Row,
          null,
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Col,
            { xs: 12 },
            _react2.default.createElement(
              'p',
              { style: _defaultStyles.searchFieldStyles.label },
              label
            )
          )
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Row,
          null,
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Col,
            { xs: 12 },
            SearchInput
          )
        )
      );
      return onlyInput ? SearchInput : Wrapper;
    }
  }]);

  return SearchField;
}(_react.Component);

SearchField.propTypes = {
  onChange: _react2.default.PropTypes.func.isRequired,
  label: _react2.default.PropTypes.string.isRequired,
  onlyInput: _react2.default.PropTypes.bool
};

exports.default = SearchField;