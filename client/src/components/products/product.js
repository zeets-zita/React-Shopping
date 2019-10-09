import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductImg from './productImg';
import { addProduct } from '../../actions/cartActions';

import '../../styles/product.css';


const Product = ({ product, addProduct }) => {

  product.quantity = 1;

  return (
    <div
      className="list-item"
      data-img={product.img}
    >
      <ProductImg
        classes="list-item-thumb"
        src={require(`../../static/products/${product.img}.jpg`)}
        alt={product.title}
      />
      <div className="list-item-info">
      <p className="list-item-title">{product.title}</p>
      <p className="list-item-desc">{product.description}</p>
      </div>
      <div className="list-item-price">
        <div className="val">
          <small>R{product.price}</small>
        </div>
      </div>
      <div className="list-item-buy-btn"
          onClick={() => addProduct(product)}
          >Add to cart</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
