import { UPDATE_CART } from './types';

export const updateCart = cartProducts => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);


  let cartTotal = {
    productQuantity,
    totalPrice,
    currencyId: 'Rand',
    currencyFormat: 'R'
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
