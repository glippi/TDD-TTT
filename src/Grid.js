import React, { Component } from 'react' 
import { Cell } from './Cell'

export class Grid extends Component {
  render() {
    const { grid, signBoard } = this.props

    return (
      <div className="w-25"> 
        <h1 className={`grid-wrapper`}>Tic Tac Toe</h1>
        <div className="flex flex-row flex-wrap justify-center items-centerr">
        {grid.map((value, index) => (
          <div key={index}> 
            <Cell cellValue={value} signBoard={signBoard(index + 1)} />
          </div>
        ))}
      </div>
     </div>
    )
  }
} 
