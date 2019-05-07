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
    const { sign } = this.state

    const text = this.state.sign === '' ? cellPosition : this.state.sign

    return (
      <div className={`cell`} onClick={this.signCell}>
        {sign}
      </div>
    )
  }
}
