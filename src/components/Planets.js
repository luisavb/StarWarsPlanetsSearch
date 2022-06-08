import React, { useEffect, useState } from 'react';

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fecthPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const data = await response.json();
      const dataPlanets = data.results;
      console.log(dataPlanets);
      // -- source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
      // primeiro um map, pois planets é uma array de objetos;
      // Object.entries pega os objetos e transforma em arays, o fromEntries volta objetos;
      // pega a key e exclui todas que são residents
      const withoutResidents = dataPlanets
        .map((planet) => (
          Object.fromEntries(Object.entries(planet)
            .filter(([key]) => key !== 'residents'))));
      console.log(withoutResidents);
      setPlanets(withoutResidents);
    };
    fecthPlanets();
  }, []);

  return (
    <>
      <h1>Star Wars</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Planets;
