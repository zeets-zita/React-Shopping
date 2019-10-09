import CartItem from '../cartItem';

const productMock = {
    id: 2,
    img: "Item9",
    title: "Kalanchoe Bitteri",
    description: "with dark grey cylinder pot",
    price: 129.99,
    currencyId: "ZAR",
    currencyFormat: "R"
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <CartItem product={productMock} removeProduct={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('append class list-item--mouseover when mouseover x button', () => {
  expect(wrapped.find('.list-item').hasClass('list-item--mouseover')).toEqual(
    false
  );
  wrapped.find('.list-item-del').simulate('mouseover');
  expect(wrapped.find('.list-item').hasClass('list-item--mouseover')).toEqual(
    true
  );
});
