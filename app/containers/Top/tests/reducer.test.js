
import { fromJS } from 'immutable';
import topReducer from '../reducer';

describe('topReducer', () => {
  it('returns the initial state', () => {
    expect(topReducer(undefined, {})).toEqual(fromJS({}));
  });
});
