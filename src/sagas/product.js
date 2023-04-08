import { call, put, takeLatest } from 'redux-saga/effects';
import { API } from '../api';
import {
  FETCH_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_CATEGORY,
  GET_PRODUCT_BY_CATEGORY_FAIL,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_STATUS,
  UPDATE_PRODUCT_STATUS_FAIL,
  UPDATE_PRODUCT_STATUS_SUCCESS,
} from '../actions/product';
import { createPromiseAction, implementPromiseAction, rejectPromiseAction } from '@adobe/redux-saga-promise';

function* addProduct(action) {
  try {
    const response = yield call(API.addProduct, action.payload);
    yield put({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: ADD_PRODUCT_FAIL, payload: { error: e.message } });
  }
}

function* updateProduct(action) {
  try {
    const response = yield call(API.updateProduct, action.payload);
    yield put({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: UPDATE_PRODUCT_FAIL, payload: { error: e.message } });
  }
}

function* updateProductStatus(action) {
  try {
    const response = yield call(API.updateProductStatus, action.payload);
    yield put({ type: UPDATE_PRODUCT_STATUS_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: UPDATE_PRODUCT_STATUS_FAIL, payload: { error: e.message } });
  }
}

function* getProduct(action) {
  try {
    const response = yield call(API.getProduct, action.payload);
    yield put({ type: GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_PRODUCT_FAIL, payload: { error: e } });
  }
}

function* getProductByCategory(action) {
  try {
    const response = yield call(API.getProductByCategory, action.payload);
    yield put({ type: GET_PRODUCT_BY_CATEGORY_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_PRODUCT_BY_CATEGORY_FAIL, payload: { error: e } });
  }
}

function* getSingleProduct(action) {
  try {
    const response = yield call(API.getSingleProduct, action.payload);
    yield put({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: GET_SINGLE_PRODUCT_FAIL, payload: { error: e } });
  }
}

function* deleteProduct(action) {
  try {
    const response = yield call(API.deleteProduct, action.payload);
    yield put({ type: DELETE_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: DELETE_PRODUCT_FAIL, payload: { error: e } });
  }
}

function* fetchProfile(action) {
  try {
    yield call(implementPromiseAction, action, function* () {
      return yield call(API.getProduct, action.payload);
    });
  } catch (e) {
    yield call(rejectPromiseAction, action, new Error(e.data.message()));
  }
}

function* product() {
  yield takeLatest(GET_PRODUCT, getProduct);
  yield takeLatest(GET_PRODUCT_BY_CATEGORY, getProductByCategory);
  yield takeLatest(GET_SINGLE_PRODUCT, getSingleProduct);
  yield takeLatest(ADD_PRODUCT, addProduct);
  yield takeLatest(DELETE_PRODUCT, deleteProduct);
  yield takeLatest(UPDATE_PRODUCT, updateProduct);
  yield takeLatest(UPDATE_PRODUCT_STATUS, updateProductStatus);
  yield takeLatest(createPromiseAction(FETCH_PRODUCT), fetchProfile);
}

export default product;
