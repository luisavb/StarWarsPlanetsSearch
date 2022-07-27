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

  const column = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const [type, setType] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [options, setOptions] = useState(column);

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

  const deleteOptions = () => {
    const newOptions = options.filter((option) => option !== type);
    setOptions(newOptions);
    setType(newOptions[0]);
  };

  const handleDeleteFilter = (columnType) => {
    const newNumericFilter = numericFilter
      .filter((filter) => filter.type !== columnType);
    setNumericFilter(newNumericFilter);
    setNoLooping(true); // SEMPRE LEMBRAR DE DECLARAR TRUE SE QUISER ABRIR AS PORTAS DO USEEFFECT
    setOptions([...options, columnType]);
  };

  const handleDeleteAllFilters = () => {
    setNumericFilter([]);
    setOptions(column);
    setNamePlanet('');
    setNoLooping(true);
  };

  const filterButton = () => {
    const newNumericValues = {
      type,
      comparison,
      valueFilter,
    };
    deleteOptions();
    setNumericFilter([...numericFilter, newNumericValues]);
    setNoLooping(true);
  };

  return (
    <div>
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
            {options.map((typeOfFilter, i) => (
              <option
                key={ `${typeOfFilter}-${i}` }
                value={ typeOfFilter }
              >
                { typeOfFilter }
              </option>
            ))}
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

      {numericFilter.map((filter) => (
        <div data-testid="filter" key={ filter.type }>
          <p>
            { `Tem ${filter.type} ${filter.comparison} ${filter.valueFilter}` }
          </p>
          <button
            type="button"
            onClick={ () => handleDeleteFilter(filter.type) }
          >
            Delete Filter
          </button>
        </div>
      ))}

      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ handleDeleteAllFilters }
      >
        Delete All Filters
      </button>

    </div>
  );
}

export default Inputs;
