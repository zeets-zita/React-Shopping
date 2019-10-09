import ProductList from '../productList';
import App from '../../../App';
import Products from '../products';
import Product from '../product';

const initialState = {
  list: {
    products: [
      {
        id: 10,
        img: "Item17",
        title: "Kalanchoe Bitteri",
        description: "with black square pot",
        price: 149.99,
        currencyId: "ZAR",
        currencyFormat: "R"
      },
      {
        id: 11,
        img: "Item5",
        title: "Echeveria Agavoides",
        description: "with small blue oval pot",
        price: 139.99,
        currencyId: "ZAR",
        currencyFormat: "R"
      }
    ]
  }
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <App initialState={initialState}>
      <ProductList />
    </App>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows 2 products component', () => {
  expect(wrapped.find(Product).length).toEqual(2);
});

it('shows a product list component', () => {
  expect(wrapped.find(Products).length).toEqual(1);
});
