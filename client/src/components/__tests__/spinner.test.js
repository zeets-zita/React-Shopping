import Spinner from '../spinner';

it('mounts without crashing', () => {
  const wrapped = mount(<Spinner />);
  wrapped.unmount();
});
