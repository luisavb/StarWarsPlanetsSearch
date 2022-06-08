import React, { useContext, useState } from 'react';
import FilterContext from '../context/FilterContext';

function Inputs() {
  const {
    namePlanet,
    setNamePlanet,
    setNoLooping,
    numericFilter,
    setNumericFilter,
  } = useContext(FilterContext);

  const [type, setType] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    if (id === 'name') {
      setNamePlanet(value);
      setNoLooping(true);
    }
    if (id === 'type') {
      setType(value);
    }
    if (id === 'operator') {
      setComparison(value);
    }
    if (id === 'value-filter') {
      setValueFilter(value);
    }
  };

  const filterButton = () => {
    const newNumericValues = {
      type,
      comparison,
      valueFilter,
    };
    setNumericFilter([...numericFilter, newNumericValues]);
    setNoLooping(true);
  };

  return (
    <form>
      <input
        data-testid="name-filter"
        id="name"
        type="text"
        placeholder="Search Name"
        onChange={ handleChange }
        value={ namePlanet }
      />
      <label htmlFor="type">
        Filtro
        <select data-testid="column-filter" id="type" onChange={ handleChange }>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>
      <label htmlFor="operator">
        Operador
        <select data-testid="comparison-filter" id="operator" onChange={ handleChange }>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input
        data-testid="value-filter"
        id="value-filter"
        type="number"
        placeholder="Search by Filter"
        onChange={ handleChange }
        value={ valueFilter }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterButton }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Inputs;
