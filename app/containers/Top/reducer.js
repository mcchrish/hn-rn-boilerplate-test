/*
 *
 * Top reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_LIST_DATA,
  SET_LIST_DATA,
  FETCH_ITEMS,
  SET_ITEMS,
} from './constants';

const initialState = fromJS({
  ids: [],
  isFetching: false,
  items: [],
});

function topReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_DATA:
      return state.set('isFetching', true);
    case SET_LIST_DATA:
      return state.set('ids', action.ids);
    case FETCH_ITEMS:
      return state.set('isFetchingItems', true);
    case SET_ITEMS:
      return state.set('items', action.items);
    default:
      return state;
  }
}

export default topReducer;
