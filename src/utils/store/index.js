import React from 'react';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { promiseMiddleware } from '@adobe/redux-saga-promise';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './../../reducers/index';
import rootSaga from './../../sagas/index';
import PropTypes from 'prop-types';

let composeWithDevTools;
if (process.env.NODE_ENV === 'development') {
  composeWithDevTools = require('redux-devtools-extension').composeWithDevTools;
}

let reduxStore;
const sagaMiddleware = createSagaMiddleware();

// const initialState = {};
const configureStore = () => {
  return createStore(
    rootReducer,
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(promiseMiddleware, thunk, sagaMiddleware))
      : applyMiddleware(promiseMiddleware, thunk, sagaMiddleware)
  );
};

reduxStore = configureStore();
sagaMiddleware.run(rootSaga);

const Store = ({ children }) => <Provider store={reduxStore}>{children}</Provider>;
Store.propTypes = {
  children: PropTypes.node,
};

export const browserHistory = createBrowserHistory();

export default Store;
