import { createSelector } from 'reselect';

/**
 * Direct selector to the show state domain
 */
const selectShowDomain = () => (state) => state.get('show');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Show
 */

const makeSelectShow = () => createSelector(
  selectShowDomain(),
  (substate) => substate.toJS()
);

export default makeSelectShow;
export {
  selectShowDomain,
};
