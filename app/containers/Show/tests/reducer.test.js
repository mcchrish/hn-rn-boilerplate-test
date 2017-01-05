
import { fromJS } from 'immutable';
import showReducer from '../reducer';

describe('showReducer', () => {
  it('returns the initial state', () => {
    expect(showReducer(undefined, {})).toEqual(fromJS({}));
  });
});
