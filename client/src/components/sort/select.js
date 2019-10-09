import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, classes, handleOnChange }) => {
  const createOptions = options =>
    options.map(o => (
      <option value={o.value} key={o.value}>
        {o.label}
      </option>
    ));

  return (
    <select onChange={e => handleOnChange(e.target.value)} className={classes}>
      {createOptions(options)}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  classes: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired
};

export default Select;
