import { UPDATE_CART } from '../actions/types';

const initialState = {
  data: {
    productQuantity: 0,
    totalPrice: 0,
    currencyId: 'Rand',
    currencyFormat: 'R'
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
