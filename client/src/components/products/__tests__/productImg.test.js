import ProductImg from '../productImg';

const src = 'https://cdn.shopify.com/s/files/1/1049/4696/products/POTPLANT_BLSH_grande.jpg?v=1553553641';

it('mount without crashing', () => {
  const wrapped = mount(<ProductImg src={src} />);
  wrapped.unmount();
});
