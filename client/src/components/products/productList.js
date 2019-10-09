import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';

import Products from './products';
import Spinner from '../spinner';


class ProductList extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    sort: PropTypes.string
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    const { sort: nextSort } = nextProps;

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(undefined, nextSort);
    }
  }

  handleFetchProducts = (
    sort = this.props.sort
  ) => {
    this.setState({ isLoading: true });
    this.props.fetchProducts( sort, () => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
         {isLoading && <Spinner />}
        <div className="list-container">
          <Products products={products} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.list.products,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(ProductList);
