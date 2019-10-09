import Sort from '../sort';
import App from '../../../App';

const initialState = {
  sort: {
    type: 'highestprice'
  }
};

it('mounts without crashing', () => {
  const wrapped = mount(
    <App initialState={initialState}>
      <Sort />
    </App>
  );
  wrapped.unmount();
});
