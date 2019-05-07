import React, { Component } from 'react' 
import { Cell } from './Cell'

const RANGE = [...Array(9).keys()];

export class Grid extends Component {
  render() {
    return (
      <div className="center w-25"> 
        <h1 className={`grid-wrapper`}>Tic Tac Toe</h1>
        <div className="flex flex-row flex-wrap justify-center items-centerr">
        {RANGE.map(n => (
          <div key={n}> 
            <Cell cellPosition={n + 1} />
          </div>
        ))}
      </div>
     </div>
    )
  }
} 
