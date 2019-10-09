import App from '../../../App';
import Cart from '../cart';
import CartItem from '../cartItem';

const initialState = {
  cart: {
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
      <Cart />
    </App>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('should mount with 2 products in it', () => {
  expect(wrapped.find(CartItem).length).toEqual(2);
});
