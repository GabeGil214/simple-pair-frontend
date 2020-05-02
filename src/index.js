import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Grommet } from 'grommet';
import { base } from 'grommet/themes'
import { deepMerge } from 'grommet/utils';
import { AuthContextProvider } from './reducers/authReducer.js';

const myTheme = deepMerge(base, {
  global: {
    focus: {
      border: {
        color: " #ff6a00"
      }
    }
  },
  button: {
    border: {
      radius: '50%',
      color: "#ff6a00"
    },
    primary: {
      color: "#121212"
    },
    padding: {
      vertical: '10px'
    }
  },
  box: {
    color: '#eee',
    size: 'large'
  },
  layer: {
    background: 'transparent'
  }
});

ReactDOM.render(
  <AuthContextProvider>
    <Grommet theme={myTheme}>
      <App />
    </Grommet>
  </AuthContextProvider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
