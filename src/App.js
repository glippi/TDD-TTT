import React, { Component } from 'react';
import './App.css';
import { Grid } from './Grid'
import { Player } from './Player'

export default class App extends Component {
  state = {
    grid: ["1","2","3","4","5","6","7","8","9"],
    actualPlayer: "player1"
  }

  changePlayer = () => {
    const { actualPlayer } = this.state
    const nextPlayer = actualPlayer === "player1" ? "player2" : "player1"
    this.setState({ actualPlayer: nextPlayer })
  }

  signBoard = index => () => {
    const { actualPlayer, grid } = this.state
    const sign = actualPlayer === 'player1' ? 'X' : 'O'
    grid.splice(index - 1, 1, sign) 
    this.changePlayer()
  }

  render() {
    const { grid, actualPlayer } = this.state

    return (
      <div className="App flex flex-row items-center justify-center">
        <Player whoIsPlaying={actualPlayer} />
        <Grid grid={grid} signBoard={this.signBoard} />
      </div>
    )
  }
}
