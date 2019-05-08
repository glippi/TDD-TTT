import React from 'react';
import './App.css';
import { Grid } from './Grid'
import { Player } from './Player'

function App() {
  return (
    <div className="App flex flex-row items-center justify-center">
      <Player />
      <Grid />
    </div>
  );
}

export default App;
