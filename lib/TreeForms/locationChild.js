'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactFlexboxGrid = require('react-flexbox-grid');

var _defaultStyles = require('../defaultStyles');

var _reduxForm = require('redux-form');

var _TextField = require('redux-form-material-ui/lib/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import validator from '../../validations/index';
const validate = (values) => validator(values,
  ['name', 'description']);*/

var LocationChild = function LocationChild(props) {
  return _react2.default.createElement(
    'div',
    { style: _defaultStyles.containerDialogTab },
    _react2.default.createElement(
      _reactFlexboxGrid.Row,
      null,
      _react2.default.createElement(
        _reactFlexboxGrid.Col,
        { xs: 12 },
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          null,
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(_reduxForm.Field, {
              fullWidth: true,
              name: 'name',
              component: _TextField2.default,
              hintText: 'Location Name',
              floatingLabelFixed: true,
              parse: function parse(b) {
                return b.replace(/\s\s+/g, ' ');
              },
              floatingLabelStyle: _defaultStyles.userFormStyles.floatingLabelText,
              floatingLabelText: 'Location Name'
            })
          )
        ),
        _react2.default.createElement(
          _reactFlexboxGrid.Row,
          null,
          _react2.default.createElement(
            _reactFlexboxGrid.Col,
            { xs: 12 },
            _react2.default.createElement(_reduxForm.Field, {
              fullWidth: true,
              name: 'description',
              component: _TextField2.default,
              hintText: 'Description',
              multiLine: true,
              rows: 3,
              rowsMax: 4,
              maxLength: 150,
              parse: function parse(b) {
                return b.replace(/\s\s+/g, ' ');
              },
              floatingLabelFixed: true,
              floatingLabelStyle: _defaultStyles.userFormStyles.floatingLabelText,
              floatingLabelText: 'Description'
            })
          )
        )
      )
    )
  );
};

LocationChild.propTypes = {
  id: _react2.default.PropTypes.string,
  permissions: _react2.default.PropTypes.array
};
LocationChild = (0, _reduxForm.reduxForm)({
  form: 'LocationChild',
  // validate,
  enableReinitialize: true
})(LocationChild);
/*const mapStateToProps = (state) => ({
  initialValues: {
    name: '',
    description: '',
    parent: state.location._id,
    ancestors: Boolean(state.location.ancestors) ? state.location.ancestors.concat(state.location._id) : [],
  },
});*/
exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(LocationChild);