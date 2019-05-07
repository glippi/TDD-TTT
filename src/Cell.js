import React, { Component } from 'react' 

export class Cell extends Component {
  state = {
    sign: ''
  }

  signCell = () => {
    this.setState({ sign: "X" })
  }

  render() {
    const { cellPosition } = this.props

    return (
      <div className={`cell`} onClick={this.signCell}>{this.state.sign === '' ? cellPosition : this.state.sign}</div>
    )
  }
} 
