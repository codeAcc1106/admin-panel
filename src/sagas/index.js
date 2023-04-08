import { all, fork } from 'redux-saga/effects';

import auth from './authSaga';
import profile from './profile';
import category from './category';
import product from './product';

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(profile),
    fork(category),
    fork(product),
  ]);
}
