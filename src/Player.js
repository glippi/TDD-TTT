import React, { Component } from 'react' 

export class Player extends Component {
  render() {
    const { whoIsPlaying } = this.props
    const actualPlayer = whoIsPlaying === 'player1' ? "Player 1" : "Player 2"

    return (
      <h2 className={`player ${whoIsPlaying === 'player1' ? "blue" : "red"} mv5 f3 fw4 ttu tracked`}>
        {`${actualPlayer} moves`}
      </h2>
    )
  }
}
