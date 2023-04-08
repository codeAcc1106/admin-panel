import { call, put, takeLatest } from 'redux-saga/effects';
import { API } from '../api';
import {
  FETCH_CHARGER_LOG,
  FETCH_CHARGER_LOG_SUCCESS,
  FETCH_CHARGER_LOG_FAIL,
  DELETE_CHARGER_LOG_SUCCESS,
  DELETE_CHARGER_LOG_FAIL,
  DELETE_CHARGER_LOG,
} from 'actions/activityLog';

function* fetchActivityLog(action) {
  try {
    const response = yield call(API.getActivityLog, action.payload);
    yield put({ type: FETCH_CHARGER_LOG_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_CHARGER_LOG_FAIL, payload: { error: e } });
  }
}

function* deleteActivityLog(action) {
  try {
    yield call(API.deleteActivityLog, action.payload);
    yield put({ type: DELETE_CHARGER_LOG_SUCCESS, payload: action.payload });
  } catch (e) {
    yield put({ type: DELETE_CHARGER_LOG_FAIL, payload: { error: e } });
  }
}

function* activityLog() {
  yield takeLatest(FETCH_CHARGER_LOG, fetchActivityLog);
  yield takeLatest(DELETE_CHARGER_LOG, deleteActivityLog);
}
export default activityLog;
