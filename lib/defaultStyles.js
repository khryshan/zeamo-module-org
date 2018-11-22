'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteButtonStyles = exports.assignBarStyles = exports.searchFieldStyles = exports.primaryButtonLabelColor = exports.treeFormsStyles = exports.muiTheme = exports.palette = exports.userFormStyles = exports.containerDialogTab = exports.disabledColor = undefined;

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

var _colorManipulator = require('material-ui/utils/colorManipulator');

var _spacing = require('material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyles = {
  tree: {
    base: {
      listStyle: 'none',
      backgroundColor: '#FFFFFF',
      margin: 0,
      padding: 0,
      color: '#000',
      fontSize: '16px'
    },
    node: {
      base: {
        position: 'relative'
      },
      baseActive: {
        backgroundColor: 'rgba(72, 119, 249, .2)',
        color: '#4877f9'
      },
      link: {
        cursor: 'pointer',
        position: 'relative',
        padding: '0px 5px',
        display: 'block'
      },
      activeLink: {
        background: 'rgba(0,0,0,0.1)'
      },
      toggle: {},
      header: {
        base: {
          textAlign: 'left'
        },
        icon: {},
        title: {
          lineHeight: '24px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }
      },
      subtree: {
        listStyle: 'none',
        paddingLeft: '19px'
      },
      loading: {
        color: '#E2C089'
      }
    }
  }
};

var disabledColor = exports.disabledColor = '#666';
var containerDialogTab = exports.containerDialogTab = {
  marginLeft: '24px',
  paddingRight: '24px'
};
var userFormStyles = exports.userFormStyles = {
  floatingLabelText: {
    color: '#4877f9',
    fontFamily: '"Fira Sans", sans-serif',
    fontWeight: 'bold'
  },
  checkboxLabelStyle: {
    fontSize: '16px',
    fontFamily: '"Fira Sans", sans-serif'
  },
  checkboxWrapperStyle: {
    marginTop: '15px'
  },
  submitButton: {
    backgroundColor: '#4877f9',
    fontFamily: '"Fira Sans", sans-serif',
    color: 'white'
  }
};
var palette = exports.palette = {
  primary1Color: '#4877f9',
  primary2Color: '#1C1F24',
  primary3Color: _colors.grey400,
  accent1Color: '#4877f9',
  accent2Color: _colors.grey100,
  accent3Color: _colors.grey500,
  textColor: _colors.white,
  alternateTextColor: _colors.white,
  canvasColor: _colors.white,
  borderColor: '#4877f9',
  disabledColor: (0, _colorManipulator.fade)(_colors.white, 0.3),
  pickerHeaderColor: _colors.cyan500,
  clockCircleColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.07),
  shadowColor: _colors.fullBlack
};
var muiTheme = exports.muiTheme = (0, _getMuiTheme2.default)({
  palette: { palette: palette },
  checkbox: {
    boxColor: palette.primary1Color,
    checkedColor: palette.primary1Color,
    requiredColor: palette.primary1Color,
    disabledColor: palette.disabledColor,
    labelColor: palette.primary1Color,
    labelDisabledColor: palette.disabledColor
  },
  flatButton: {
    color: _colors.transparent,
    buttonFilterColor: '#999999',
    disabledTextColor: (0, _colorManipulator.fade)(_colors.fullBlack, 0.3),
    textColor: palette.primary1Color,
    primaryTextColor: palette.primary1Color,
    secondaryTextColor: palette.accent1Color
  },
  raisedButton: {
    color: palette.textColor,
    textColor: palette.textColor,
    primaryColor: palette.primary1Color,
    primaryTextColor: palette.textColor,
    secondaryColor: palette.accent1Color,
    secondaryTextColor: palette.textColor,
    disabledColor: (0, _colorManipulator.darken)(palette.primary1Color, 0.1),
    disabledTextColor: (0, _colorManipulator.fade)(palette.textColor, 0.3)
  },
  tabs: {
    backgroundColor: _colors.white,
    textColor: (0, _colorManipulator.fade)(_colors.darkBlack, 0.7),
    selectedTextColor: '#4877f9'
  },
  spacing: { spacing: _spacing2.default },
  fontFamily: '"Fira Sans", sans-serif'
});
var treeFormsStyles = exports.treeFormsStyles = {
  submitButton: {
    backgroundColor: '#4877f9',
    fontFamily: '"Fira Sans", sans-serif',
    color: 'white'
  },
  cancelButton: {
    fontFamily: '"Fira Sans", sans-serif',
    marginRight: '15px',
    color: '#4877f9'
  },
  customContentStyle: {
    width: '60%'
  },
  dialogTitle: {
    backgroundColor: 'black',
    color: 'white'
  },
  dialogTitleWrapper: {
    padding: '5px 0px 5px 20px',
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    margin: '0px',
    fontFamily: '"Fira Sans", sans-serif'
  },
  p: {
    fontSize: '16px',
    fontFamily: '"Fira Sans", sans-serif'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  },
  slide: {
    padding: 10,
    height: '60vh'
  },
  buttons: {
    padding: 34
  }
};
var primaryButtonLabelColor = exports.primaryButtonLabelColor = "#ffffff";
var searchFieldStyles = exports.searchFieldStyles = {
  wrapper: {
    position: 'relative'
  },
  icon: {
    color: '#e0e0e0',
    fill: '#e0e0e0',
    position: 'absolute',
    top: '12px'
  },
  input: {
    paddingLeft: '26px',
    fontSize: '12px'
  },
  label: {
    color: '#4877f9',
    fontSize: '14px'
  }
};
var assignBarStyles = exports.assignBarStyles = {
  firstRow: {
    paddingTop: '120px',
    paddingBottom: '10px'
  },
  row: {
    paddingBottom: '10px'
  },
  icon: {
    fill: '#ffffff'
  }
};
var deleteButtonStyles = exports.deleteButtonStyles = {
  wrapper: { marginTop: '15px' },
  label: { paddingLeft: '16px' },
  icon: { width: '24px', padding: '0', marginLeft: 0 }
};
exports.default = defaultStyles;