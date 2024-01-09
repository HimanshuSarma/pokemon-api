import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useGetResource from './customHooks/useGetResource';
import Inventory from './components/Inventory';
import { API } from './API/api.config';
import './App.css';
import GenericForm from './Forms/GenericForm';
import PokemonForm from './components/Pokemon';

function App() {

  return (
    <div className="App">
      <PokemonForm />
      {/* <Inventory /> */}
    </div>
  );
}

export default App;
