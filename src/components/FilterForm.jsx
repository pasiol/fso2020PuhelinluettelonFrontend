import React from 'react';

// eslint-disable-next-line react/prop-types
const FilterForm = ({ filter, onFilterChange }) => {
  console.log('Component FilterForm props:', filter);
  return (
    <>
      <form>
        filter shown with
        <input onChange={onFilterChange} value={filter} />
      </form>
    </>
  );
};

export default FilterForm;
