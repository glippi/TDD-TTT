import React, { Component } from 'react';
import './App.css';
import { Grid } from './Grid'
import { Player } from './Player'

export default class App extends Component {
  state = {}

  render() {
    return (
    <div className="App flex flex-row items-center justify-center">
      <Player />
      <Grid />
    </div>
    )
  }
}
