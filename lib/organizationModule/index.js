'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNode = exports.OrganizationNoRedux = exports.TAB_CHILD = exports.TAB_COMPANY = exports.TAB_GYMS = exports.TAB_LOCATION = exports.TAB_USERS = exports.TreeFull = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tabsIndexes;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _location = require('./location');

var _treeFull = require('./treeFull');

var _treeFull2 = _interopRequireDefault(_treeFull);

var _treeComponent = require('../treeComponent');

var _treeForms = require('../treeForms');

var _treeForms2 = _interopRequireDefault(_treeForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabsIndexes = (_tabsIndexes = {}, _defineProperty(_tabsIndexes, _treeComponent.TYPE_USER, _treeForms.TAB_USERS), _defineProperty(_tabsIndexes, _treeComponent.TYPE_LOCATION, _treeForms.TAB_LOCATION), _defineProperty(_tabsIndexes, _treeComponent.TYPE_GYM, _treeForms.TAB_GYMS), _defineProperty(_tabsIndexes, _treeComponent.TYPE_COMPANY, _treeForms.TAB_COMPANY), _tabsIndexes);

var OrganizationModule = function (_Component) {
  _inherits(OrganizationModule, _Component);

  function OrganizationModule(props) {
    _classCallCheck(this, OrganizationModule);

    var _this = _possibleConstructorReturn(this, (OrganizationModule.__proto__ || Object.getPrototypeOf(OrganizationModule)).call(this, props));

    _this.state = {
      selectedTab: 0
    };
    _this.onToggle = _this.onToggle.bind(_this);
    return _this;
  }

  _createClass(OrganizationModule, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var selectDefault = function selectDefault() {
        return _store2.default.dispatch((0, _location.load)(_this2.props.data));
      };
      selectDefault();
      if (this.props.handleSelectDefault) {
        this.props.handleSelectDefault(selectDefault);
      }
    }
  }, {
    key: 'onToggle',
    value: function onToggle(node, t, parent) {
      var dispatch = this.props.dispatch;

      _store2.default.dispatch((0, _location.load)(node.type === _treeComponent.TYPE_LOCATION || node.parsed ? node : parent));
      var selectedTab = !node.parsed ? tabsIndexes[node.type] || _treeForms.TAB_LOCATION : _treeForms.TAB_LOCATION;

      this.setState({ selectedTab: selectedTab });
    }
  }, {
    key: 'render',
    value: function render() {
      var selectedTab = this.state.selectedTab;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Grid,
          { style: this.props.style },
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Row,
            null,
            _react2.default.createElement(
              _reactStyledFlexboxgrid.Col,
              { xs: 4 },
              _react2.default.createElement(_treeFull2.default, {
                data: this.props.data,
                onToggle: this.onToggle
              })
            ),
            _react2.default.createElement(
              _reactStyledFlexboxgrid.Col,
              { xs: 8 },
              Boolean(this.props.data) && _react2.default.createElement(_treeForms2.default, {
                handleSubmit: this.props.handleSubmit,
                users: this.props.users,
                companies: this.props.companies,
                gyms: this.props.gyms,
                selectedTab: selectedTab,
                isAdmin: this.props.isAdmin,
                showDeleteButton: this.props.showDeleteButton,
                handleSearchGym: this.props.handleSearchGym,
                handleSearchUser: this.handleSearchUsers
              })
            )
          )
        )
      );
    }
  }]);

  return OrganizationModule;
}(_react.Component);

;
OrganizationModule.propTypes = {
  onToggle: _react2.default.PropTypes.func,
  data: _react2.default.PropTypes.object.isRequired,
  style: _react2.default.PropTypes.object,
  isAdmin: _react2.default.PropTypes.bool,
  showDeleteButton: _react2.default.PropTypes.bool,
  handleSubmit: _react2.default.PropTypes.func.isRequired,
  handleSelectDefault: _react2.default.PropTypes.func
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    location: state.location
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OrganizationModule);
exports.TreeFull = _treeFull2.default;
exports.TAB_USERS = _treeForms.TAB_USERS;
exports.TAB_LOCATION = _treeForms.TAB_LOCATION;
exports.TAB_GYMS = _treeForms.TAB_GYMS;
exports.TAB_COMPANY = _treeForms.TAB_COMPANY;
exports.TAB_CHILD = _treeForms.TAB_CHILD;
exports.OrganizationNoRedux = OrganizationModule;
exports.parseNode = _treeComponent.parseNode;