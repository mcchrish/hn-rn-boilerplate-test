import { createSelector } from 'reselect';

/**
 * Direct selector to the top state domain
 */
const selectTopDomain = () => (state) => state.get('top');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Top
 */

const makeSelectTop = () => createSelector(
  selectTopDomain(),
  (substate) => substate.toJS()
);

const selectIds = () => createSelector(
  makeSelectTop(),
  (topState) => topState.ids
);


export default makeSelectTop;
export {
  selectTopDomain,
  selectIds,
};
