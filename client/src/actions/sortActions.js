import { UPDATE_SORT } from './types';

export const updateSort = sort => ({
  type: UPDATE_SORT,
  payload: sort
});
