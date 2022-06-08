import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function Inputs() {
  const {
    namePlanet,
    setNamePlanet,
    filterPlanet,
    setFilterPlanet,
    setNoLooping,
  } = useContext(FilterContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setNamePlanet(value);
      setNoLooping(true);
    }
    if (name === 'filter') {
      setFilterPlanet(value);
      setNoLooping(true);
    }
  };
  return (
    <form>
      <input
        data-testid="name-filter"
        name="name"
        type="text"
        placeholder="Search Name"
        onChange={ handleChange }
        value={ namePlanet }
      />
      <label htmlFor="filter">
        Filtro
        <select id="filter">
          <option>name</option>
        </select>
      </label>
      <label htmlFor="operator">
        Operador
        <select id="operator">
          <option>menor para o maior</option>
          <option>maior para o menor</option>
        </select>
      </label>
      <input
        name="filter"
        type="number"
        placeholder="Search by Filter"
        onChange={ handleChange }
        value={ filterPlanet }
      />
      <button type="button"> Filtrar </button>
    </form>
  );
}

export default Inputs;
