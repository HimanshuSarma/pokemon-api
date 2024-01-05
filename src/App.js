import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useGetResource from './customHooks/useGetResource';
import Inventory from './components/Inventory';
import logo from './logo.svg';
import './App.css';

function App() {

  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.post('http://localhost:8080/grocery/single', {
  //       name: 'grocery1'
  //     });
  //     console.log('response', res);
  //   })();
  // }, []);


  return (
    <div className="App">
      <Inventory />
    </div>
  );
}

export default App;
