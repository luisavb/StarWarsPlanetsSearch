import React, { useState } from 'react';
import propTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [namePlanet, setNamePlanet] = useState('');
  const [filterPlanet, setFilterPlanet] = useState(0);
  const [noLopping, setNoLooping] = useState(false);

  const contextValue = {
    namePlanet,
    setNamePlanet,
    filterPlanet,
    setFilterPlanet,
    noLopping,
    setNoLooping,
  };

  return (
    <FilterContext.Provider value={ contextValue }>
      { children }
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: propTypes.string,
}.isRequired;

export default FilterProvider;
