import Product from '../product';
import App from '../../../App';

const productMock = {
    id: 16,
    img: 'Item23',
    title: 'Pelargonium Triste',
    description: 'with brown tree design pot',
    price: 399.99,
    currencyId: 'ZAR',
    currencyFormat: 'R'
};

it('mount without crashing', () => {
  const wrapped = mount(
    <App>
      <Product product={productMock} addProduct={() => {}} />
    </App>
  );
  wrapped.unmount();
});
