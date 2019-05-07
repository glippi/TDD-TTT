import React, { Component } from 'react' 

export class Cell extends Component {
  render() {
    const { cellPosition } = this.props

    return (
      <div className={`cell`}>{cellPosition}</div>
    )
  }
} 
