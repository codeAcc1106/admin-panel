import { call, put, takeLatest } from 'redux-saga/effects';
import { API } from './../api';
import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  LOGIN_WITH_OTP_SUCCESS,
  LOGIN_WITH_OTP_FAIL,
  LOGIN_WITH_OTP,
  CREATE_NEW_PASSWORD,
  CREATE_NEW_PASSWORD_SUCCESS,
  CREATE_NEW_PASSWORD_FAIL,
} from './../actions/authAction';
import { CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAIL, CHANGE_PASSWORD } from './../actions/authAction';

function* login(action) {
  try {
    const response = yield call(API.login, action.payload);
    console.log('login response ==>', response);
    yield put({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (e) {
    console.log('login e ==>', e);
    yield put({ type: LOGIN_FAIL, payload: { error: e } });
  }
}

function* forgotPassword(action) {
  try {
    const response = yield call(API.forgotPassword, action.payload);
    yield put({ type: FORGOT_PASSWORD_SUCCESS, payload: response.data });
    action.cb && action.cb(response);
  } catch (e) {
    yield put({ type: FORGOT_PASSWORD_FAIL, payload: { error: e } });
    action.cb && action.cb(e);
  }
}

function* changePassword(action) {
  try {
    const response = yield call(API.changePassword, action.payload);
    yield put({ type: CHANGE_PASSWORD_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: CHANGE_PASSWORD_FAIL, payload: { error: e } });
  }
}

function* loginWithOtp(action) {
  try {
    const response = yield call(API.login, action.payload);
    yield put({ type: LOGIN_WITH_OTP_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: LOGIN_WITH_OTP_FAIL, payload: { error: e } });
  }
}

function* createNewPassword(action) {
  try {
    const response = yield call(API.resetPassword, action.payload);
    yield put({ type: CREATE_NEW_PASSWORD_SUCCESS, payload: response.data });
    action.cb && action.cb(response);
  } catch (e) {
    yield put({ type: CREATE_NEW_PASSWORD_FAIL, payload: { error: e } });
    action.cb && action.cb(e);
  }
}

function* auth() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
  yield takeLatest(CHANGE_PASSWORD, changePassword);
  yield takeLatest(LOGIN_WITH_OTP, loginWithOtp);
  yield takeLatest(CREATE_NEW_PASSWORD, createNewPassword);
}

export default auth;
