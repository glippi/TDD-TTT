import React, { Component } from 'react'

export class Player extends Component {
  render() {
    const { whoIsPlaying, winner } = this.props
    const actualPlayer = whoIsPlaying === 'player1' ? "Player 1" : "Player 2"

    return (
      <h2 className={`player ${whoIsPlaying === 'player1' ? "blue" : "red"} mr3 mv5 f3 fw4 ttu tracked`}>
        {`${winner ? `${winner} wins!` : `${actualPlayer} moves`}`}
        {winner &&
          (<div className={`pointer black absolute mv1 f5`}>
            Restart the game?
            <div className="mv1">&#128260;</div>
          </div>)
        }
      </h2>
    )
  }
}
