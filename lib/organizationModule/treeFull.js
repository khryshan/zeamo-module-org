'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _treeComponent = require('../treeComponent');

var _treeComponent2 = _interopRequireDefault(_treeComponent);

var _treeForms = require('../treeForms');

var _filter = require('./filter');

var filters = _interopRequireWildcard(_filter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeFull = function (_Component) {
  _inherits(TreeFull, _Component);

  function TreeFull(props) {
    _classCallCheck(this, TreeFull);

    var _this = _possibleConstructorReturn(this, (TreeFull.__proto__ || Object.getPrototypeOf(TreeFull)).call(this, props));

    _this.state = {
      data: props.data
    };
    _this.handleFilter = _this.handleFilter.bind(_this);
    return _this;
  }

  _createClass(TreeFull, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.data });
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(e, a) {
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var filter = value.trim();
      if (!filter) {
        return this.setState({ listItems: this.props.data });
      }
      var filtered = filters.filterTree(this.props.data, filter);
      filtered = filters.expandFilteredNodes(filtered, filter);
      return this.setState({ data: filtered, filter: filter });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          extra = _objectWithoutProperties(_props, ['data']);

      return _react2.default.createElement(
        _Paper2.default,
        { style: { height: '79.5vh', overflow: 'auto', whiteSpace: 'nowrap' }, zDepth: 1 },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12, style: { padding: '10px' } },
          _react2.default.createElement(_treeForms.SearchField, { onlyInput: true, label: 'search', onChange: this.handleFilter })
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 12 },
          _react2.default.createElement(_treeComponent2.default, _extends({ data: this.state.data }, extra))
        )
      );
    }
  }]);

  return TreeFull;
}(_react.Component);

exports.default = TreeFull;
;
TreeFull.propTypes = {
  onToggle: _react2.default.PropTypes.func,
  data: _react2.default.PropTypes.object.isRequired
};