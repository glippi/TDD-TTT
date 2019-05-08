import React, { Component } from 'react'

export class Cell extends Component {
  render() {
    const { cellValue, signBoard } = this.props

    return (
      <div className={`cell flex flex-row justify-center items-center w4 h4 ba pointer`} onClick={()=> signBoard()}>
        {cellValue}
      </div>
    )
  }
}
