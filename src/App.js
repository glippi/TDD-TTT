import React, { Component } from 'react';
import './App.css';
import { Header } from './Header'
import { Grid } from './Grid'
import { Player } from './Player'
import gameChecker from './gameChecker'

export default class App extends Component {
  state = {
    grid: ["1","2","3","4","5","6","7","8","9"],
    actualPlayer: "player1",
    winner: ""
  }

  changePlayer = () => {
    const { actualPlayer } = this.state
    const nextPlayer = actualPlayer === "player1" ? "player2" : "player1"
    this.setState({ actualPlayer: nextPlayer })
  }

  checkForWinner = () => {
    const { grid } = this.state
    const winner = gameChecker(grid)
    this.setState({ winner })
  }

  signBoard = index => () => {
    const { actualPlayer, grid, winner } = this.state
    const sign = actualPlayer === 'player1' ? '❌' : '⭕'
    grid.splice(index - 1, 1, sign)
    this.checkForWinner()

    if (!winner) this.changePlayer()
    if (winner) {
      this.setState({ actualPlayer: ""})
    }
  }

  render() {
    const { grid, actualPlayer, winner } = this.state

    return (
      <div className="App flex flex-column items-center justify-center">
        <Header />
        <Player whoIsPlaying={actualPlayer} winner={winner} />
        <Grid grid={grid} signBoard={this.signBoard} winner={winner} actualPlayer={actualPlayer} className={`${winner ? "pointer-events-none" : ""}`} />
      </div>
    )
  }
}
