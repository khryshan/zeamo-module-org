import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white, darkBlack, grey400, grey100,
  grey500, cyan500, fullBlack, transparent } from 'material-ui/styles/colors';
import { fade, darken } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';


const defaultStyles = {
  tree: {
    base: {
      listStyle: 'none',
      backgroundColor: '#FFFFFF',
      margin: 0,
      padding: 0,
      color: '#000',
      fontSize: '16px',
    },
    node: {
      base: {
        position: 'relative',
      },
      baseActive: {
        backgroundColor: 'rgba(72, 119, 249, .2)',
        color: '#4877f9',
      },
      link: {
        cursor: 'pointer',
        position: 'relative',
        padding: '0px 5px',
        display: 'block',
      },
      activeLink: {
        background: 'rgba(0,0,0,0.1)',
      },
      toggle: { },
      header: {
        base: {
          textAlign: 'left',
        },
        icon: {

        },
        title: {
          lineHeight: '24px',
          textOverflow: 'ellipsis',
        	whiteSpace: 'nowrap',
        	overflow: 'hidden',
        },
      },
      subtree: {
        listStyle: 'none',
        paddingLeft: '19px',
      },
      loading: {
        color: '#E2C089',
      },
    },
  },
};

export const disabledColor = '#666';
export const containerDialogTab = {
  marginLeft: '24px',
  paddingRight: '24px',
};
export const userFormStyles = {
  floatingLabelText: {
    color: '#4877f9',
    fontFamily: '"Fira Sans", sans-serif',
    fontWeight: 'bold',
  },
  checkboxLabelStyle: {
    fontSize: '16px',
    fontFamily: '"Fira Sans", sans-serif',
  },
  checkboxWrapperStyle: {
    marginTop: '15px',
  },
  submitButton: {
    backgroundColor: '#4877f9',
    fontFamily: '"Fira Sans", sans-serif',
    color: 'white',
  },
};
export const palette = {
  primary1Color: '#4877f9',
  primary2Color: '#1C1F24',
  primary3Color: grey400,
  accent1Color: '#4877f9',
  accent2Color: grey100,
  accent3Color: grey500,
  textColor: white,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: '#4877f9',
  disabledColor: fade(white, 0.3),
  pickerHeaderColor: cyan500,
  clockCircleColor: fade(darkBlack, 0.07),
  shadowColor: fullBlack,
};
export const muiTheme = getMuiTheme({
  palette: { palette },
  checkbox: {
    boxColor: palette.primary1Color,
    checkedColor: palette.primary1Color,
    requiredColor: palette.primary1Color,
    disabledColor: palette.disabledColor,
    labelColor: palette.primary1Color,
    labelDisabledColor: palette.disabledColor,
  },
  flatButton: {
    color: transparent,
    buttonFilterColor: '#999999',
    disabledTextColor: fade(fullBlack, 0.3),
    textColor: palette.primary1Color,
    primaryTextColor: palette.primary1Color,
    secondaryTextColor: palette.accent1Color,
  },
  raisedButton: {
    color: palette.textColor,
    textColor: palette.textColor,
    primaryColor: palette.primary1Color,
    primaryTextColor: palette.textColor,
    secondaryColor: palette.accent1Color,
    secondaryTextColor: palette.textColor,
    disabledColor: darken(palette.primary1Color, 0.1),
    disabledTextColor: fade(palette.textColor, 0.3),
  },
  tabs: {
    backgroundColor: white,
    textColor: fade(darkBlack, 0.7),
    selectedTextColor: '#4877f9',
  },
  spacing: { spacing },
  fontFamily: '"Fira Sans", sans-serif',
});
export const treeFormsStyles = {
  submitButton: {
    backgroundColor: '#4877f9',
    fontFamily: '"Fira Sans", sans-serif',
    color: 'white',
  },
  cancelButton: {
    fontFamily: '"Fira Sans", sans-serif',
    marginRight: '15px',
    color: '#4877f9',
  },
  customContentStyle: {
    width: '60%',
  },
  dialogTitle: {
    backgroundColor: 'black',
    color: 'white',
  },
  dialogTitleWrapper: {
    padding: '5px 0px 5px 20px',
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    margin: '0px',
    fontFamily: '"Fira Sans", sans-serif',
  },
  p: {
    fontSize: '16px',
    fontFamily: '"Fira Sans", sans-serif',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
    height: '60vh',
  },
  buttons: {
    padding: 34,
  },
};
export const primaryButtonLabelColor = "#ffffff";
export const searchFieldStyles = {
  wrapper: {
    position: 'relative',
  },
  icon: {
    color: '#e0e0e0',
    fill: '#e0e0e0',
    position: 'absolute',
    top: '12px',
  },
  input: {
    paddingLeft: '26px',
    fontSize: '12px',
  },
  label: {
    color: '#4877f9',
    fontSize: '14px',
  },
};
export const assignBarStyles = {
  firstRow: {
    paddingTop: '120px',
    paddingBottom: '10px',
  },
  row: {
    paddingBottom: '10px',
  },
  icon: {
    fill: '#ffffff',
  },
};
export const deleteButtonStyles = {
  wrapper: { marginTop: '15px' },
  label: { paddingLeft: '16px' },
  icon: { width: '24px', padding: '0', marginLeft: 0 },
}
export default defaultStyles;
