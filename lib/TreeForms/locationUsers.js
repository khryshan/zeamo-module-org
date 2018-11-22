'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactFlexboxGrid = require('react-flexbox-grid');

var _styles = require('../styles/styles');

var _reduxForm = require('redux-form');

var _TextField = require('redux-form-material-ui/lib/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _index = require('../../validations/index');

var _index2 = _interopRequireDefault(_index);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(values) {
  return (0, _index2.default)(values, ['email', 'firstName', 'lastName']);
};
var LeftIcon = function LeftIcon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { id: 'svg_1', d: 'm12.41,7.41l-1.41,-1.41l-6,6l6,6l1.41,-1.41l-4.58,-4.59l4.58,-4.59z' }),
    _react2.default.createElement('path', { id: 'svg_2', d: 'm20.41,7.41l-1.41,-1.41l-6,6l6,6l1.41,-1.41l-4.58,-4.59l4.58,-4.59z' })
  );
};
var RightIcon = function RightIcon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { id: 'svg_1', d: 'm8,6l-1.41,1.41l4.58,4.59l-4.58,4.59l1.41,1.41l6,-6l-6,-6z' }),
    _react2.default.createElement('path', { id: 'svg_2', d: 'm16,6l-1.41,1.41l4.58,4.59l-4.58,4.59l1.41,1.41l6,-6l-6,-6z' })
  );
};
var LocationUsers = function LocationUsers(props) {
  var NonUsedUsers = props.users.filter(function (user) {
    return !props.locationUsers.find(function (u) {
      return u._id === user._id;
    });
  });
  return _react2.default.createElement(
    'div',
    { style: _styles.containerDialogTab },
    _react2.default.createElement(
      _reactFlexboxGrid.Row,
      null,
      _react2.default.createElement(
        _reactFlexboxGrid.Col,
        { xs: 6 },
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          null,
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(
              'p',
              { style: { color: '#4877f9', fontSize: '14px' } },
              'Assigned'
            )
          )
        ),
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          null,
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(
              'div',
              { className: 'searchField' },
              _react2.default.createElement(_search2.default, { color: '#e0e0e0' }),
              _react2.default.createElement(_TextField2.default, {
                className: 'searchFieldInput',
                hintText: 'Assigned',
                fullWidth: true
              })
            )
          )
        ),
        _react2.default.createElement(
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
                name: 'locationUsers',
                style: { width: '100%', height: '40vh', overflow: 'auto', whiteSpace: 'nowrap' },
                onChange: props.handleSelectedUser
              },
              props.locationUsers.map(function (user, i) {
                return _react2.default.createElement(
                  'option',
                  {
                    key: i,
                    style: { padding: '10px 0px 10px 10px', fontSize: '16px' },
                    value: user._id,
                    title: user.email
                  },
                  user.name
                );
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactFlexboxGrid.Col,
        { xs: 1 },
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          { around: 'xs', middle: 'xs' },
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, style: { paddingTop: '120px', paddingBottom: '10px' } },
            _react2.default.createElement(_RaisedButton2.default, {
              icon: _react2.default.createElement(LeftIcon, null),
              fullWidth: true,
              onTouchTap: props.handleAddAllUsers,
              buttonStyle: _styles.userFormStyles.submitButton,
              disabled: !NonUsedUsers.length
            })
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, style: { paddingBottom: '10px' } },
            _react2.default.createElement(_RaisedButton2.default, {
              icon: _react2.default.createElement(_chevronLeft2.default, null),
              fullWidth: true,
              buttonStyle: _styles.userFormStyles.submitButton,
              onTouchTap: props.handleAddUsers,
              disabled: !props.usersSelected.length
            })
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, style: { paddingBottom: '10px' } },
            _react2.default.createElement(_RaisedButton2.default, {
              icon: _react2.default.createElement(_chevronRight2.default, null),
              fullWidth: true,
              onTouchTap: props.handleRemoveUsers,
              buttonStyle: _styles.userFormStyles.submitButton,
              disabled: !Boolean(props.locationUsersSelected.length > 0)
            })
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(_RaisedButton2.default, {
              icon: _react2.default.createElement(RightIcon, null),
              fullWidth: true,
              onTouchTap: props.handleRemoveAllUsers,
              buttonStyle: _styles.userFormStyles.submitButton,
              disabled: !Boolean(props.locationUsers.length > 0)
            })
          )
        )
      ),
      _react2.default.createElement(
        _reactFlexboxGrid.Col,
        { xs: 5 },
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          null,
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(
              'p',
              { style: { color: '#4877f9', fontSize: '14px' } },
              'Users'
            )
          )
        ),
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          null,
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(
              'div',
              { className: 'searchField' },
              _react2.default.createElement(_search2.default, { color: '#e0e0e0' }),
              _react2.default.createElement(_TextField2.default, {
                onChange: props.handleSearchUser,
                className: 'searchFieldInput',
                hintText: 'Users',
                fullWidth: true
              })
            )
          )
        ),
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          null,
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(
              'select',
              {
                multiple: true,
                name: 'users',
                style: { width: '100%', height: '40vh', overflow: 'auto', whiteSpace: 'nowrap' },
                onChange: props.handleSelectedUser
              },
              NonUsedUsers.map(function (user, i) {
                return _react2.default.createElement(
                  'option',
                  {
                    key: i,
                    style: { padding: '10px 0px 10px 10px', fontSize: '16px' },
                    value: user._id,
                    title: user.email
                  },
                  user.name
                );
              })
            )
          )
        )
      )
    )
  );
};

LocationUsers.propTypes = {
  id: _react2.default.PropTypes.string,
  users: _react2.default.PropTypes.array,
  locationUsers: _react2.default.PropTypes.array,
  locationUsersSelected: _react2.default.PropTypes.array,
  usersSelected: _react2.default.PropTypes.array,
  handleSearchUser: _react2.default.PropTypes.func,
  handleSelectedUser: _react2.default.PropTypes.func,
  handleAddUsers: _react2.default.PropTypes.func,
  handleAddAllUsers: _react2.default.PropTypes.func,
  handleRemoveUsers: _react2.default.PropTypes.func,
  handleRemoveAllUsers: _react2.default.PropTypes.func

};
LocationUsers = (0, _reduxForm.reduxForm)({
  form: 'LocationUsers',
  validate: validate,
  enableReinitialize: true
})(LocationUsers);
var mapStateToProps = function mapStateToProps(state) {
  return {
    initialValues: state.LocationUsers
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(LocationUsers);