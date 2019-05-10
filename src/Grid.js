import React, { Component } from 'react'
import { Cell } from './Cell'

export class Grid extends Component {
  render() {
    const { grid, signBoard, winner, actualPlayer, className = "" } = this.props

    return (
      <div className={`w-100 grid-wrapper flex flex-row justify-around items-center ${className}`}>
        {!winner &&
          <div className="w-30" style={{ fontSize: '100px'}}>
            {actualPlayer === "player1"
              ? (<span>&#129489;</span>)
              : (<span>&#128590;</span>)
            }
        </div>
        }
        {winner &&
          <div className="w-30" style={{ fontSize: '100px'}}>
            {winner === "player1" && <span>&#129489;</span>}
            {winner === "player2" && <span>&#128590;</span>}
          </div>
        }

        <div className="w-25 flex flex-row flex-wrap justify-center items-center">
          {grid.map((value, index) => (
            <div key={index}>
              <Cell cellValue={value} signBoard={signBoard(index + 1)} />
            </div>
          ))}
        </div>

        <div className="w-30">
          {winner === 'player1' &&
              <div className={`f5 fw4 ttu tracked`}>
                Shame on you player 2
                <div style={{ fontSize: '80px' }}>&#129318;</div>
              </div>
          }
          {winner === 'player2' &&
              <div className={`f5 fw4 ttu tracked`}>
                Shame on you player 1
                <div style={{ fontSize: '80px' }}>&#128583;</div>
              </div>
          }
        </div>
     </div>
    )
  }
}
