'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactFlexboxGrid = require('react-flexbox-grid');

var _reduxForm = require('redux-form');

var _TextField = require('redux-form-material-ui/lib/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _search = require('material-ui/svg-icons/action/search');

var _search2 = _interopRequireDefault(_search);

var _chevronLeft = require('material-ui/svg-icons/navigation/chevron-left');

var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

var _chevronRight = require('material-ui/svg-icons/navigation/chevron-right');

var _chevronRight2 = _interopRequireDefault(_chevronRight);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _defaultStyles = require('../defaultStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const validate = (values) => validator(values,
  ['email', 'firstName', 'lastName']);*/

var LeftIcon = function LeftIcon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { id: 'svg_1', d: 'm12.41,7.41l-1.41,-1.41l-6,6l6,6l1.41,-1.41l-4.58,-4.59l4.58,-4.59z' }),
    _react2.default.createElement('path', { id: 'svg_2', d: 'm20.41,7.41l-1.41,-1.41l-6,6l6,6l1.41,-1.41l-4.58,-4.59l4.58,-4.59z' })
  );
};
//import validator from '../../validations/index';

var RightIcon = function RightIcon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { id: 'svg_1', d: 'm8,6l-1.41,1.41l4.58,4.59l-4.58,4.59l1.41,1.41l6,-6l-6,-6z' }),
    _react2.default.createElement('path', { id: 'svg_2', d: 'm16,6l-1.41,1.41l4.58,4.59l-4.58,4.59l1.41,1.41l6,-6l-6,-6z' })
  );
};

var LocationGym = function LocationGym(props) {
  var NonUsedGyms = props.gyms.filter(function (gym) {
    return !props.locationGyms.find(function (g) {
      return g && g._id === gym._id;
    });
  });
  return _react2.default.createElement(
    'div',
    { style: _defaultStyles.containerDialogTab },
    _react2.default.createElement(
      _reactFlexboxGrid.Row,
      null,
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
                name: 'locationGyms',
                style: { width: '100%', height: '40vh' },
                onChange: props.handleSelectedGym
              },
              props.locationGyms.map(function (gym, i) {
                return gym ? _react2.default.createElement(
                  'option',
                  {
                    key: i,
                    style: { padding: '10px 0px 10px 20px', fontSize: '16px' },
                    value: gym._id
                  },
                  gym.name
                ) : null;
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
              onTouchTap: props.handleAddAllGyms,
              buttonStyle: _defaultStyles.userFormStyles.submitButton
            })
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, style: { paddingBottom: '10px' } },
            _react2.default.createElement(_RaisedButton2.default, {
              icon: _react2.default.createElement(_chevronLeft2.default, null),
              fullWidth: true,
              buttonStyle: _defaultStyles.userFormStyles.submitButton,
              onTouchTap: props.handleAddGyms,
              disabled: !Boolean(props.gymsSelected.length > 0)
            })
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12, style: { paddingBottom: '10px' } },
            _react2.default.createElement(_RaisedButton2.default, {
              icon: _react2.default.createElement(_chevronRight2.default, null),
              fullWidth: true,
              onTouchTap: props.handleRemoveGyms,
              buttonStyle: _defaultStyles.userFormStyles.submitButton,
              disabled: !Boolean(props.locationGymsSelected.length > 0)
            })
          ),
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(_RaisedButton2.default, {
              icon: _react2.default.createElement(RightIcon, null),
              fullWidth: true,
              onTouchTap: props.handleRemoveAllGyms,
              buttonStyle: _defaultStyles.userFormStyles.submitButton
            })
          )
        )
      ),
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
              'Available'
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
                onChange: props.handleSearchGym,
                className: 'searchFieldInput',
                hintText: 'Available',
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
                name: 'gyms',
                style: { width: '100%', height: '40vh' },
                onChange: props.handleSelectedGym
              },
              NonUsedGyms.map(function (gym, i) {
                return _react2.default.createElement(
                  'option',
                  {
                    key: i,
                    style: { padding: '10px 0px 10px 20px', fontSize: '16px' },
                    value: gym._id
                  },
                  gym.name
                );
              })
            )
          )
        )
      )
    )
  );
};

LocationGym.propTypes = {
  id: _react2.default.PropTypes.string,
  locationGyms: _react2.default.PropTypes.array,
  gyms: _react2.default.PropTypes.array,
  locationGymsSelected: _react2.default.PropTypes.array,
  gymsSelected: _react2.default.PropTypes.array,
  handleSearchGym: _react2.default.PropTypes.func,
  handleSelectedGym: _react2.default.PropTypes.func,
  handleAddGyms: _react2.default.PropTypes.func,
  handleAddAllGyms: _react2.default.PropTypes.func,
  handleRemoveGyms: _react2.default.PropTypes.func,
  handleRemoveAllGyms: _react2.default.PropTypes.func
};
LocationGym = (0, _reduxForm.reduxForm)({
  form: 'LocationGym',
  // validate,
  enableReinitialize: true
})(LocationGym);
/*const mapStateToProps = (state) => ({
  initialValues: state.LocationGym,
});*/
exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(LocationGym);