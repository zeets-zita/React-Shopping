import Select from '../select';

const optionsMock = [
  { value: '', label: 'Select' },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' }
];

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Select options={optionsMock} handleOnChange={() => {}} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('mount with 3 option element', () => {
  expect(wrapped.find('option').length).toEqual(3);
});
