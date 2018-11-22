'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchField = exports.TAB_USERS = exports.TAB_COMPANY = exports.TAB_GYMS = exports.TAB_CHILD = exports.TAB_LOCATION = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactRedux = require('react-redux');

var _reactStyledFlexboxgrid = require('react-styled-flexboxgrid');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Tabs = require('material-ui/Tabs');

var _reactSwipeableViews = require('react-swipeable-views');

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _defaultStyles = require('../defaultStyles');

var _locationForm = require('./locationForm');

var _locationForm2 = _interopRequireDefault(_locationForm);

var _locationChildForm = require('./locationChildForm');

var _locationChildForm2 = _interopRequireDefault(_locationChildForm);

var _locationUsersForm = require('./locationUsersForm');

var _locationUsersForm2 = _interopRequireDefault(_locationUsersForm);

var _locationGymForm = require('./locationGymForm');

var _locationGymForm2 = _interopRequireDefault(_locationGymForm);

var _formsUI = require('./formsUI');

var _location = require('../organizationModule/location');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TAB_LOCATION = exports.TAB_LOCATION = 0;
var TAB_CHILD = exports.TAB_CHILD = 1;
var TAB_GYMS = exports.TAB_GYMS = 2;
var TAB_COMPANY = exports.TAB_COMPANY = 2;
var TAB_USERS = exports.TAB_USERS = 3;

var TreeForms = function (_Component) {
  _inherits(TreeForms, _Component);

  function TreeForms(props) {
    _classCallCheck(this, TreeForms);

    var _this = _possibleConstructorReturn(this, (TreeForms.__proto__ || Object.getPrototypeOf(TreeForms)).call(this, props));

    _this.state = {
      slideIndex: 0,
      gyms: _this.parseCompaniesOrGyms(props.gyms || props.companies),
      gymsSelected: [],
      locationGyms: [],
      locationGymsSelected: [],
      locationUsers: [],
      locationUsersSelected: [],
      users: props.users ? _this.parseUsers(props.users) : [],
      usersSelected: []
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSelected = _this.handleSelected.bind(_this);
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.handleAddAll = _this.handleAddAll.bind(_this);
    _this.handleRemove = _this.handleRemove.bind(_this);
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handleAddUsers = _this.handleAddUsers.bind(_this);
    _this.handleAddAllUsers = _this.handleAddAllUsers.bind(_this);
    _this.handleRemoveAllUsers = _this.handleRemoveAllUsers.bind(_this);
    _this.handleRemoveUsers = _this.handleRemoveUsers.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.resetForm = _this.resetForm.bind(_this);
    _this.handleSearchUsers = _this.handleSearchUsers.bind(_this);
    _this.handleSearchGymOrCompanies = _this.handleSearchGymOrCompanies.bind(_this);
    return _this;
  }

  _createClass(TreeForms, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.dispatch((0, _location.load)({}));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var difference = _lodash2.default.reduce(this.props, function (result, value, key) {
        return _lodash2.default.isEqual(value, nextProps[key]) ? result : result.concat(key);
      }, []);
      if (difference.length === 1 && difference[0].indexOf('valid') !== -1) return;
      if (nextProps.location && nextProps.location.users && (nextProps.location.companies || nextProps.location.gyms)) {
        var collection = nextProps.isAdmin ? nextProps.location.companies : nextProps.location.gyms;
        this.setState({ locationUsers: this.parseUsers(nextProps.location.users),
          locationGyms: this.parseCompaniesOrGyms(collection) });
      }

      if (nextProps.selectedTab !== undefined) {
        this.handleChange(nextProps.selectedTab);
      }
      if (nextProps.users) {
        this.setState({ users: this.parseUsers(nextProps.users) });
      }
      if (nextProps.gyms || nextProps.companies) {
        this.setState({ gyms: this.parseCompaniesOrGyms(nextProps.gyms || nextProps.companies) });
      }
    }
  }, {
    key: 'parseUsers',
    value: function parseUsers(users) {
      return users.map(function (u) {
        return { name: u.profile.name, _id: u._id, title: u.email };
      });
    }
  }, {
    key: 'parseCompaniesOrGyms',
    value: function parseCompaniesOrGyms(collection) {
      return collection.map(function (u) {
        return { name: u.name, _id: u._id };
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(slideIndex) {
      this.setState({ slideIndex: slideIndex });
    }
  }, {
    key: 'handleSelected',
    value: function handleSelected(e) {
      var options = e.target.options;
      var value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push({ _id: options[i].value, name: options[i].label, title: options[i].title });
        }
      }
      this.setState(_defineProperty({}, e.target.name + 'Selected', value));
    }
  }, {
    key: 'handleAdd',
    value: function handleAdd(e) {
      var _setState2;

      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.gymsSelected;
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'locationGyms';

      var val = this.state[key].concat(selected).map(function (o) {
        delete o.selected;return o;
      });
      this.setState((_setState2 = {}, _defineProperty(_setState2, key, _lodash2.default.uniqWith(val, _lodash2.default.isEqual)), _defineProperty(_setState2, 'users', this.parseUsers(this.props.users)), _defineProperty(_setState2, 'gyms', this.parseCompaniesOrGyms(this.props.gyms || this.props.companies)), _setState2));
    }
  }, {
    key: 'handleAddAll',
    value: function handleAddAll(e) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gyms';
      var collection = arguments[2];

      this.handleAdd(null, this.state[key], collection);
      this.setState(_defineProperty({}, 'location' + _lodash2.default.capitalize(key) + 'Selected', []));
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(e) {
      var _this2 = this;

      var collection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'locationGyms';
      var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'locationGymsSelected';

      var val = this.state[collection].filter(function (obj) {
        return !_this2.state[selected].find(function (s) {
          return s._id === obj._id;
        });
      });
      this.setState(_defineProperty({}, collection, val));
    }
  }, {
    key: 'handleRemoveAll',
    value: function handleRemoveAll(e) {
      var _setState5;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'locationGyms';

      this.setState((_setState5 = {}, _defineProperty(_setState5, key, []), _defineProperty(_setState5, key + 'Selected', []), _setState5));
    }
  }, {
    key: 'handleAddUsers',
    value: function handleAddUsers() {
      this.handleAdd(null, this.state.usersSelected, 'locationUsers');
    }
  }, {
    key: 'handleAddAllUsers',
    value: function handleAddAllUsers() {
      this.handleAddAll(null, 'users', 'locationUsers');
    }
  }, {
    key: 'handleRemoveUsers',
    value: function handleRemoveUsers() {
      this.handleRemove(null, 'locationUsers', 'locationUsersSelected');
    }
  }, {
    key: 'handleRemoveAllUsers',
    value: function handleRemoveAllUsers() {
      this.handleRemoveAll(null, 'locationUsers');
    }
  }, {
    key: 'getIdsArray',
    value: function getIdsArray(collection) {
      return collection.map(function (i) {
        return i._id;
      });
    }
  }, {
    key: 'resetForm',
    value: function resetForm() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'LocationChild';

      console.info("reseting", name);
      this.props.dispatch((0, _reduxForm.reset)(name));
    }
  }, {
    key: 'filterUsers',
    value: function filterUsers(value, data) {
      var result = [];
      value = value.toLowerCase();
      data.forEach(function (u) {
        u.selected = u.title && u.title.toLowerCase().indexOf(value) !== -1 || u.name && u.name.toLowerCase().indexOf(value) !== -1;
        if (u.selected) result.push(u);
      });
      return result;
    }
  }, {
    key: 'handleSearchUsers',
    value: function handleSearchUsers(e, field, value) {
      if (field === 'Users') {
        var users = this.parseUsers(this.props.users).slice();
        var usersSelected = [];
        if (value) {
          usersSelected = this.filterUsers(value, users);
        }
        this.setState({ users: users, usersSelected: usersSelected });
      } else if (field === 'Assigned') {
        var locationUsers = this.state.locationUsers.slice();
        var locationUsersSelected = [];
        if (value) {
          locationUsersSelected = this.filterUsers(value, locationUsers);
        }
        this.setState({ locationUsers: locationUsers, locationUsersSelected: locationUsersSelected });
      }
    }
  }, {
    key: 'filterCompaniesOrGyms',
    value: function filterCompaniesOrGyms(value, data) {
      var result = [];
      value = value.toLowerCase();
      data.forEach(function (u) {
        u.selected = u.name && u.name.toLowerCase().indexOf(value) !== -1;
        if (u.selected) result.push(u);
      });
      return result;
    }
  }, {
    key: 'handleSearchGymOrCompanies',
    value: function handleSearchGymOrCompanies(e, field, value) {
      if (field === 'Available') {
        var gyms = this.parseCompaniesOrGyms(this.props.gyms || this.props.companies).slice();
        var gymsSelected = [];
        if (value) {
          gymsSelected = this.filterCompaniesOrGyms(value, gyms);
        }
        this.setState({ gyms: gyms, gymsSelected: gymsSelected });
      } else if (field === 'Assigned') {
        var locationGyms = this.state.locationGyms.slice();
        var locationGymsSelected = [];
        if (value) {
          locationGymsSelected = this.filterCompaniesOrGyms(value, locationGyms);
        }
        this.setState({ locationGyms: locationGyms, locationGymsSelected: locationGymsSelected });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(values, type) {
      var _props = this.props,
          location = _props.location,
          isAdmin = _props.isAdmin,
          dispatch = _props.dispatch;
      var slideIndex = this.state.slideIndex;

      var val = { ancestors: values.ancestors || location.ancestors, parent: values.parent || location._id };
      var resetForm = this.resetForm;
      switch (slideIndex) {
        case TAB_USERS:
          val = { users: this.getIdsArray(this.state.locationUsers) };
          break;
        case TAB_GYMS:
          var key = isAdmin ? 'companies' : 'gyms';
          val = _defineProperty({}, key, this.getIdsArray(this.state.locationGyms));
          break;
        case TAB_LOCATION:
          val = Object.assign({}, val, { name: values.name, isActive: values.isActive,
            description: values.description });
          resetForm = function resetForm() {
            return dispatch((0, _location.load)({}));
          };
          break;
        case TAB_CHILD:
          val = Object.assign({}, val, values);
          break;
        default:
          console.log(values);
      }
      this.props.handleSubmit(location._id, val, slideIndex, resetForm, type);
    }
  }, {
    key: 'handleSave',
    value: function handleSave() {
      var forms = [this.refs.locationForm, this.refs.LocationChildForm, this.refs.locationGymForm, this.refs.LocationUsersForm];
      if (this.state.slideIndex < forms.length) {
        forms[this.state.slideIndex].getWrappedInstance().submit();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          valid = _props2.valid,
          validChild = _props2.validChild,
          showDeleteButton = _props2.showDeleteButton;
      var locationUsers = this.state.locationUsers;

      var disabled = false;
      if (this.state.slideIndex === TAB_LOCATION) {
        disabled = !valid;
      } else if (this.state.slideIndex === TAB_CHILD) {
        disabled = !validChild;
      }
      var actions = [_react2.default.createElement(_FlatButton2.default, {
        key: 0,
        label: 'Cancel',
        style: _defaultStyles.treeFormsStyles.cancelButton,
        primary: true
      }), _react2.default.createElement(_RaisedButton2.default, {
        key: 1,
        labelColor: _defaultStyles.primaryButtonLabelColor,
        label: this.state.slideIndex === 1 ? 'Add' : 'Save',
        buttonStyle: _defaultStyles.treeFormsStyles.submitButton,
        disabled: disabled,
        onClick: function onClick() {
          return _this3.handleSave();
        }
      })];
      return _react2.default.createElement(
        _MuiThemeProvider2.default,
        { muiTheme: (0, _getMuiTheme2.default)(_defaultStyles.muiTheme) },
        _react2.default.createElement(
          _Paper2.default,
          { style: { height: '79.5vh' }, zDepth: 1 },
          _react2.default.createElement(
            _Tabs.Tabs,
            {
              onChange: this.handleChange,
              value: this.state.slideIndex,
              inkBarStyle: { backgroundColor: '#4877f9' }
            },
            _react2.default.createElement(_Tabs.Tab, { label: 'Edit', value: TAB_LOCATION }),
            _react2.default.createElement(_Tabs.Tab, { label: 'Add Child', value: TAB_CHILD }),
            !this.props.isAdmin ? _react2.default.createElement(_Tabs.Tab, { label: 'Add Gym', value: TAB_GYMS }) : _react2.default.createElement(_Tabs.Tab, { label: 'Add Company', value: TAB_COMPANY }),
            _react2.default.createElement(_Tabs.Tab, { label: 'Add Users', value: TAB_USERS })
          ),
          _react2.default.createElement(
            _reactSwipeableViews2.default,
            {
              index: this.state.slideIndex,
              onChangeIndex: this.handleChange
            },
            _react2.default.createElement(
              'div',
              { style: _defaultStyles.treeFormsStyles.slide },
              _react2.default.createElement(_locationForm2.default, {
                ref: 'locationForm',
                onSubmit: this.handleSubmit,
                id: this.props.location._id,
                isAdmin: this.props.isAdmin,
                showDeleteButton: showDeleteButton
              })
            ),
            _react2.default.createElement(
              'div',
              { style: _defaultStyles.treeFormsStyles.slide },
              _react2.default.createElement(_locationChildForm2.default, {
                ref: 'LocationChildForm',
                onSubmit: this.handleSubmit,
                id: this.props.location._id
              })
            ),
            _react2.default.createElement(
              'div',
              { style: _defaultStyles.treeFormsStyles.slide },
              _react2.default.createElement(_locationGymForm2.default, {
                ref: 'locationGymForm',
                locationGyms: this.state.locationGyms,
                locationGymsSelected: this.state.locationGymsSelected,
                gymsSelected: this.state.gymsSelected,
                gyms: this.state.gyms,
                onSubmit: this.handleSubmit,
                handleSearchGym: this.handleSearchGymOrCompanies,
                handleSelectedGym: this.handleSelected,
                handleAddGyms: this.handleAdd,
                key: JSON.stringify(this.state.locationGyms),
                handleAddAllGyms: this.handleAddAll,
                handleRemoveGyms: this.handleRemove,
                handleRemoveAllGyms: this.handleRemoveAll,
                id: this.props.location._id
              })
            ),
            _react2.default.createElement(
              'div',
              { style: _defaultStyles.treeFormsStyles.slide },
              _react2.default.createElement(_locationUsersForm2.default, {
                ref: 'LocationUsersForm',
                locationUsers: locationUsers,
                locationUsersSelected: this.state.locationUsersSelected,
                onSubmit: this.handleSubmit,
                id: this.props.location._id,
                users: this.state.users,
                key: JSON.stringify(locationUsers),
                usersSelected: this.state.usersSelected,
                handleSelectedUser: this.handleSelected,
                handleSearchUser: this.handleSearchUsers,
                handleAddUsers: this.handleAddUsers,
                handleAddAllUsers: this.handleAddAllUsers,
                handleRemoveUsers: this.handleRemoveUsers,
                handleRemoveAllUsers: this.handleRemoveAllUsers
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: _defaultStyles.treeFormsStyles.buttons },
            _react2.default.createElement(
              _reactStyledFlexboxgrid.Row,
              null,
              _react2.default.createElement(
                _reactStyledFlexboxgrid.Col,
                { xs: 12 },
                _react2.default.createElement(
                  _reactStyledFlexboxgrid.Row,
                  { end: 'xs' },
                  _react2.default.createElement(
                    _reactStyledFlexboxgrid.Col,
                    { xs: 6 },
                    actions
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return TreeForms;
}(_react.Component);

;
TreeForms.propTypes = {
  selectedTab: _react2.default.PropTypes.number,
  isAdmin: _react2.default.PropTypes.bool,
  showDeleteButton: _react2.default.PropTypes.bool,
  handleSubmit: _react2.default.PropTypes.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    location: state.location,
    valid: (0, _reduxForm.isValid)('Location')(state),
    validChild: (0, _reduxForm.isValid)('LocationChild')(state) && !(0, _reduxForm.isPristine)('LocationChild')(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TreeForms);
exports.SearchField = _formsUI.SearchField;