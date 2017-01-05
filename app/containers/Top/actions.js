/*
 *
 * Top actions
 *
 */

import {
  FETCH_LIST_DATA,
  SET_LIST_DATA,
  FETCH_ITEMS,
  SET_ITEMS,
} from './constants';

export function setListData(ids) {
  return {
    type: SET_LIST_DATA,
    ids,
  };
}

export function fetchListData() {
  return {
    type: FETCH_LIST_DATA,
  };
}

export function fetchItems() {
  return {
    type: FETCH_ITEMS,
  };
}

export function setItems(items) {
  return {
    type: SET_ITEMS,
    items,
  };
}

