import { call, put, takeLatest } from 'redux-saga/effects';
import { API } from '../api';
import {
  FETCH_CATEGORY,
  GET_CATEGORY,
  GET_CATEGORY_FAIL,
  GET_CATEGORY_SUCCESS,
  GET_FRONT_CATEGORY,
  GET_FRONT_CATEGORY_FAIL,
  GET_FRONT_CATEGORY_SUCCESS,
  GET_SINGLE_CATEGORY,
  GET_SINGLE_CATEGORY_FAIL,
  GET_SINGLE_CATEGORY_SUCCESS,
  ADD_CATEGORY,
  ADD_CATEGORY_FAIL,
  ADD_CATEGORY_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_SUCCESS,
} from '../actions/category';
import { createPromiseAction, implementPromiseAction, rejectPromiseAction } from '@adobe/redux-saga-promise';

function* addCategory(action) {
  try {
    const response = yield call(API.addCategory, action.payload);
    yield put({ type: ADD_CATEGORY_SUCCESS, payload: response.data });
  } catch (e) {
    // console.log('e ==>', e.message);
    yield put({ type: ADD_CATEGORY_FAIL, payload: { error: e.message } });
  }
}

function* updateCategory(action) {
  try {
    const response = yield call(API.updateCategory, action.payload);
    yield put({ type: UPDATE_CATEGORY_SUCCESS, payload: response.data });
  } catch (e) {
    // console.log('e ==>', e.message);
    yield put({ type: UPDATE_CATEGORY_FAIL, payload: { error: e.message } });
  }
}

function* getCategory(action) {
  try {
    const response = yield call(API.getCategory, action.payload);
    yield put({ type: GET_CATEGORY_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_CATEGORY_FAIL, payload: { error: e } });
  }
}

function* getFrontCategory(action) {
  try {
    // console.log('action ==>', action.payload);
    const response = yield call(API.getFrontCategory, action.payload);
    yield put({ type: GET_FRONT_CATEGORY_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_FRONT_CATEGORY_FAIL, payload: { error: e } });
  }
}

function* getSingleCategory(action) {
  try {
    const response = yield call(API.getSingleCategory, action.payload);
    yield put({ type: GET_SINGLE_CATEGORY_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_SINGLE_CATEGORY_FAIL, payload: { error: e } });
  }
}

function* deleteCategory(action) {
  try {
    const response = yield call(API.deleteCategory, action.payload);
    yield put({ type: DELETE_CATEGORY_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: DELETE_CATEGORY_FAIL, payload: { error: e } });
  }
}

function* fetchProfile(action) {
  try {
    yield call(implementPromiseAction, action, function* () {
      return yield call(API.getCategory, action.payload);
    });
  } catch (e) {
    yield call(rejectPromiseAction, action, new Error(e.data.message()));
  }
}

function* category() {
  yield takeLatest(GET_CATEGORY, getCategory);
  yield takeLatest(GET_FRONT_CATEGORY, getFrontCategory);
  yield takeLatest(GET_SINGLE_CATEGORY, getSingleCategory);
  yield takeLatest(ADD_CATEGORY, addCategory);
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
  yield takeLatest(UPDATE_CATEGORY, updateCategory);
  yield takeLatest(createPromiseAction(FETCH_CATEGORY), fetchProfile);
}

export default category;
