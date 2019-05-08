import React, { Component } from 'react' 

export class Player extends Component {
  render() {
    const { whoIsPlaying } = this.props
    const actualPlayer = whoIsPlaying === 'player1' ? "Player 1" : "Player 2"

    return (
      <div className={`player`}>{`${actualPlayer} moves`}</div>
    )
  }
}
