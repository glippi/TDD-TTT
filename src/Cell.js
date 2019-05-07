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

    const text = sign || cellPosition

    return (
      <div className={`cell flex flex-row justify-center items-center w4 h4 ba pointer`} onClick={this.signCell}>
        <span className={``}>{text}</span>
      </div>
    )
  }
}
