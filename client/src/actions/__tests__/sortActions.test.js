import * as actions from '../sortActions';
import * as types from '../types';

describe('sort actions', () => {
  it('should return expected payload', () => {
    const text = 'lowestprice';

    const expectedAction = {
      type: types.UPDATE_SORT,
      payload: text
    };

    expect(actions.updateSort(text)).toEqual(expectedAction);
  });
});
