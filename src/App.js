import React, { Component } from 'react';
import './App.css';
import { Grid } from './Grid'
import { Player } from './Player'

export default class App extends Component {
  state = {
    actualPlayer: "player1"
  }

  render() {
    const { actualPlayer } = this.state

    return (
    <div className="App flex flex-row items-center justify-center">
      <Player whoIsPlaying={actualPlayer} />
      <Grid />
    </div>
    )
  }
}
