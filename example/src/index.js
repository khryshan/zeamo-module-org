import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer as form  } from 'redux-form';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
const rootReducer = combineReducers({ form, todos })

let store = createStore(rootReducer, ['Use Redux'])
ReactDOM.render(<Provider store={store}>
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
</Provider>, document.getElementById('root'));
registerServiceWorker();
