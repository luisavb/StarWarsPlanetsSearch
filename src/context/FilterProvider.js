import React, { useState } from 'react';
import propTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [namePlanet, setNamePlanet] = useState('');
  // input onde é digitado o nome do planeta para fazer a filtragem
  const [noLopping, setNoLooping] = useState(false);
  // um estado só para declarar todas as dependencias sem dá looping no useEffects
  const [numericFilter, setNumericFilter] = useState([]);
  // botão que traz dados da coluna com o tipo, do operador e do número para fazer a filtragem

  const contextValue = {
    namePlanet,
    setNamePlanet,
    noLopping,
    setNoLooping,
    numericFilter,
    setNumericFilter,
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
