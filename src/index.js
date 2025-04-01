import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './App.scss';

import Store from './utils/store';
import AppRotes from './appRoutes'

// comment

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <AppRotes />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();