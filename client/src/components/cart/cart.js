import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct } from '../../actions/cartActions';
import { updateCart } from '../../actions/totalActions';
import CartItem from './cartItem';
import { formatPrice } from '../../utils/util';

import './cart.css'

class Cart extends Component {
  static propTypes = {
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object
  };

  state = {
    isOpen: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openCart = () => {
    this.setState({ isOpen: true });
  };

  closeCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
    this.openCart();
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  proceedToCheckout = () => {
    const {
      totalPrice,
      productQuantity,
      currencyFormat,
      currencyId
    } = this.props.cartTotal;

    if (!productQuantity) {
      alert('Add some product in the cart!');
    } else {
      alert(
        `Checkout - Subtotal: ${currencyFormat} ${formatPrice(
          totalPrice,
          currencyId
        )}`
      );
    }
  };

  render() {
    const { cartTotal, cartProducts, removeProduct } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartItem product={p} removeProduct={removeProduct} key={p.id} />
      );
    });

    let classes = ['float-cart'];
    
    if (!!this.state.isOpen) {
      classes.push('float-cart-open');
      
    }

    return (
      
      <div className={classes.join(' ')}>
        
        {/* If cart open, show close (x) button */}
        {this.state.isOpen && (
          
          <div
            onClick={() => this.closeCart()}
            className="float-cart-close-btn"
          >
            X
          </div>
        )}
        
        {/* If cart is closed, show bag with quantity of product and open cart action */}
        {!this.state.isOpen && (
          
          <span
            onClick={() => this.openCart()}
            className="bag bag--float-cart-closed"
          >
            <span className="bag-quantity">{cartTotal.productQuantity}</span>
          </span>
          
        )}
      
        <div className="float-cart-content">
          <div className="float-cart-header">
            <span className="bag">
              <span className="bag-quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Cart</span>
          </div>

          <div className="float-cart-list-container">
            {products}
            {!products.length && (
              <p className="list-empty">
                Your cart is empty <br />
              </p>
            )}
          </div>

          <div className="float-cart-footer">
            <div className="sub">SUBTOTAL</div>
              <p className="sub-price-val">
                {`${cartTotal.currencyFormat} ${formatPrice(
                  cartTotal.totalPrice,
                  cartTotal.currencyId
                )}`}
              </p>
            <div onClick={() => this.proceedToCheckout()} className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct }
)(Cart);
