import { combineReducers } from 'redux';
import listReducer from './listReducer';
import cartReducer from './cartReducer';
import totalReducer from './totalReducer';
import sortReducer from './sortReducer';

export default combineReducers({
  list: listReducer,
  cart: cartReducer,
  total: totalReducer,
  sort: sortReducer
});
