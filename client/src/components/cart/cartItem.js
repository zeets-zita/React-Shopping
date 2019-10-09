import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductImg from '../products/productImg';
import { formatPrice } from '../../utils/util';

class CartItem extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired
  };

  state = {
    isMouseOver: false
  };

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  render() {
    const { product, removeProduct } = this.props;

    const classes = ['list-item'];

    if (!!this.state.isMouseOver) {
      classes.push('list-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="list-item-del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        />
        <ProductImg
          classes="list-item-thumb"
          src={require(`../../static/cart/${product.img}.jpg`)}
          alt={product.title}
          style={{width: '20px'}}
        />
        <div className="list-item-details">
          <p className="title">{product.title}</p>
          <p className="desc">
            Quantity: {product.quantity}
          </p>
        </div>
        <div className="list-item-price">
          <p>{`${product.currencyFormat}  ${formatPrice(product.price)}`}</p>
        </div>
      </div>
    );
  }
}

export default CartItem;
