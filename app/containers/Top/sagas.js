import { takeLatest } from 'redux-saga';
import { call, put, select, fork, take, cancel } from 'redux-saga/effects';
import { FETCH_LIST_DATA } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as api from '../../api';
import { setListData, setItems } from './actions';
import { selectIds } from './selectors';

export function* fetchIdsByType() {
  try {
    const ids = yield call(api.fetchIdsByType, 'top');
    yield put(setListData(ids));
    // Fetch Item information as well
    yield fetchItems();
  } catch (err) {
    yield put({ type: 'FETCH_ERROR', err });
  }
}

export function* watchFetchIdsByType() {
  yield fork(takeLatest, FETCH_LIST_DATA, fetchIdsByType);
}

export function* TopItems() {
  const watcher = yield fork(watchFetchIdsByType);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchItems() {
  try {
    const ids = yield select(selectIds());
    const items = yield call(api.fetchItems, ids);
    yield put(setItems(items));
  } catch (err) {
    yield put({ type: 'FETCH_ERROR', err });
  }
}


// All sagas to be loaded
export default [
  TopItems,
];
