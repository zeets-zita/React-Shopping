import React from 'react';

import Sort from './sort/sort'
import Cart from './cart/cart';
import ProductList from './products/productList';

const Shop = () => (
  <React.Fragment>
    <Sort />
    <main>
      
      <ProductList />
    </main>
    <Cart />
  </React.Fragment>
);

export default Shop;
