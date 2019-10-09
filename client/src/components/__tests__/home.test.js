import Home from '../home';

it('mounts without crashing', () => {
  const wrapped = mount(<Home />);
  wrapped.unmount();
});
