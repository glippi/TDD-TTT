import React, { Component } from 'react';
import './App.css';
import { Grid } from './Grid'
import { Player } from './Player'

export default class App extends Component {
  state = {
    grid: [1,2,3,4,5,6,7,8,9],
    actualPlayer: "player1"
  }

  changePlayer = () => {
    const { actualPlayer } = this.state
    const nextPlayer = actualPlayer === "player1" ? "player2" : "player1"
    this.setState({ actualPlayer: nextPlayer })
  }

  render() {
    const { grid, actualPlayer } = this.state

    return (
    <div className="App flex flex-row items-center justify-center">
      <Player whoIsPlaying={actualPlayer} />
      <Grid grid={grid} changePlayer={this.changePlayer} />
    </div>
    )
  }
}
