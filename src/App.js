import React from 'react';
import './App.css';
import Planets from './components/Planets';
import Inputs from './components/Inputs';
import FilterProvider from './context/FilterProvider';

function App() {
  return (
    <FilterProvider>
      <Inputs />
      <Planets />
    </FilterProvider>
  );
}

export default App;
