import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import App from './components/App.jsx';
import store from './slices/index.js';

import '../assets/application.scss';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('chat'),
);
