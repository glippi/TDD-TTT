import React, { Component } from 'react'

export class Cell extends Component {
  render() {
    const { cellValue, signBoard } = this.props
    const clickable = cellValue !== '❌' && cellValue !== '⭕'

    return (
      <div className={`cell flex flex-row justify-center items-center w4 h4 ba ${clickable ? 'pointer' : 'pointer-events-none'}`} onClick={()=> signBoard()}>
        {cellValue}
      </div>
    )
  }
}
