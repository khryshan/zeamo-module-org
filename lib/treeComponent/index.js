'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeForms = exports.TYPE_GYM = exports.TYPE_LOCATION = exports.TYPE_USER = exports.TYPE_COMPANY = exports.findNodeParent = exports.parseNode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTreebeard = require('react-treebeard');

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _defaultStyles = require('../defaultStyles');

var _defaultStyles2 = _interopRequireDefault(_defaultStyles);

var _decorators = require('./decorators/');

var _decorators2 = _interopRequireDefault(_decorators);

var _treeForms = require('../treeForms');

var _treeForms2 = _interopRequireDefault(_treeForms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parseUserNodes = function parseUserNodes(root) {
  var users = root.users;
  return !Array.isArray(users) ? [] : users.map(function (user) {
    return {
      _id: user._id,
      name: user.profile.name + ' ' + user.profile.lastName,
      type: _decorators.TYPE_USER,
      parentId: root._id
    };
  });
};
var parseCompanyNodes = function parseCompanyNodes(root) {
  var companies = root.companies;
  return !Array.isArray(companies) ? [] : companies.map(function (company) {
    return Object.assign({}, company, { type: _decorators.TYPE_COMPANY, parentId: root._id });
  });
};
var parseGymNodes = function parseGymNodes(root) {
  var gyms = root.gyms;
  return !Array.isArray(gyms) ? [] : gyms.map(function (gym) {
    return Object.assign({}, gym, { type: _decorators.TYPE_GYM, parentId: root._id });
  });
};
var getAncestors = function getAncestors(parent) {
  var ancestors = parent.ancestors.slice();
  ancestors.push(parent._id);
  return ancestors;
};
var parseNode = exports.parseNode = function parseNode(node) {
  var isRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var parent = arguments[2];

  if (!node) return;
  if (node.parsed !== undefined && node.parsed) return node;
  if (!node.children) node.children = [];
  if (isRoot) {
    node.type = _decorators.TYPE_COMPANY;
    node.parsed = true;
  } else {
    node.type = _decorators.TYPE_LOCATION;
    node.ancestors = getAncestors(parent);
  }
  node.children = node.children.map(function (n) {
    return parseNode(n, false, node);
  }).concat(parseGymNodes(node), parseCompanyNodes(node), parseUserNodes(node));
  return node;
};

var findNodeParent = exports.findNodeParent = function findNodeParent(id, node) {
  if (node._id === id) return node;
  if (node.children && node.children.length) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;

        if (findNodeParent(id, child)) return findNodeParent(id, child);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return null;
};

var OrganizationModule = function (_Component) {
  _inherits(OrganizationModule, _Component);

  function OrganizationModule(props) {
    _classCallCheck(this, OrganizationModule);

    var _this = _possibleConstructorReturn(this, (OrganizationModule.__proto__ || Object.getPrototypeOf(OrganizationModule)).call(this, props));

    _this.state = {
      items: parseNode(props.data, true)
    };
    _this.onToggle = _this.onToggle.bind(_this);
    return _this;
  }

  _createClass(OrganizationModule, [{
    key: 'onToggle',
    value: function onToggle(node, toggled) {
      if (this.state.cursor) {
        this.state.cursor.active = false;
      }
      node.active = true;
      if (node.children) {
        node.toggled = toggled;
      }
      var parent = findNodeParent(node.parentId, this.state.items);
      this.setState({ cursor: node });
      if (this.props.onToggle) {
        this.props.onToggle(node, toggled, parent);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var items = this.state.items;

      this.setState({ items: parseNode(nextProps.data, true) });
    }
  }, {
    key: 'render',
    value: function render() {
      var cursor = this.state.cursor;

      return _react2.default.createElement(_reactTreebeard.Treebeard, {
        style: _defaultStyles2.default,
        data: this.state.items,
        onToggle: this.onToggle,
        decorators: _decorators2.default
      });
    }
  }]);

  return OrganizationModule;
}(_react.Component);

exports.default = OrganizationModule;
;
OrganizationModule.propTypes = {
  onToggle: _react2.default.PropTypes.func,
  data: _react2.default.PropTypes.object.isRequired
};

exports.TYPE_COMPANY = _decorators.TYPE_COMPANY;
exports.TYPE_USER = _decorators.TYPE_USER;
exports.TYPE_LOCATION = _decorators.TYPE_LOCATION;
exports.TYPE_GYM = _decorators.TYPE_GYM;
exports.TreeForms = _treeForms2.default;