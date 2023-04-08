import { call, put, takeLatest } from 'redux-saga/effects';
import { API } from './../api';
import {
  FETCH_PROFILE,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_SUCCESS,
} from './../actions/profile';
import { createPromiseAction, implementPromiseAction, rejectPromiseAction } from '@adobe/redux-saga-promise';

function* updateUserProfile(action) {
  try {
    const response = yield call(API.updateUserProfile, action.payload);
    console.log("updateProfile---response----", response);
    yield put({ type: UPDATE_PROFILE_SUCCESS, payload: response.data });
  } catch (e) {
    console.log("error====", e);
    yield put({ type: UPDATE_PROFILE_FAIL, payload: { error: e } });
  }
}

function* updateUserPassword(action) {
  try {
    const response = yield call(API.updateUserPassword, action.payload);
    yield put({ type: UPDATE_PASSWORD_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: UPDATE_PASSWORD_FAIL, payload: { error: e } });
  }
}

function* getProfile(action) {
  try {
    const response = yield call(API.getProfile, action.payload);
    console.log("getProfile_response--->", response)
    yield put({ type: GET_PROFILE_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_PROFILE_FAIL, payload: { error: e } });
  }
}

function* fetchProfile(action) {
  try {
    yield call(implementPromiseAction, action, function* () {
      return yield call(API.getProfile, action.payload);
    });
  } catch (e) {
    yield call(rejectPromiseAction, action, new Error(e.data.message()));
  }
}

function* profile() {
  yield takeLatest(UPDATE_PROFILE, updateUserProfile);
  yield takeLatest(UPDATE_PASSWORD, updateUserPassword);
  yield takeLatest(GET_PROFILE, getProfile);
  yield takeLatest(createPromiseAction(FETCH_PROFILE), fetchProfile);
}

export default profile;
