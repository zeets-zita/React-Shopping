import { FETCH_PRODUCTS } from './types';
import axios from 'axios';

import { productsAPI } from '../utils/util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  }
};

export const fetchProducts = ( sortBy, callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      let { products } = res.data;

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
