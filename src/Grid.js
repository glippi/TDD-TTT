import React, { Component } from 'react' 
import { Cell } from './Cell'

export class Grid extends Component {
  render() {
    const { grid, changePlayer } = this.props

    return (
      <div className="w-25"> 
        <h1 className={`grid-wrapper`}>Tic Tac Toe</h1>
        <div className="flex flex-row flex-wrap justify-center items-centerr">
        {grid.map(n => (
          <div key={n}> 
            <Cell cellPosition={n} changePlayer={changePlayer} />
          </div>
        ))}
      </div>
     </div>
    )
  }
} 
