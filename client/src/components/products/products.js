import React from 'react';

import Product from './product';

const Products = ({ products }) => {
  return products.map(p => {
    return <Product product={p} key={p.id} />;
  });
};

export default Products;
