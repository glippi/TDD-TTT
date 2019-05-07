import React, { Component } from 'react'

export class Cell extends Component {
  state = {
    sign: ''
  }

  signCell = () => {
    console.log('signCell')
    this.setState({ sign: "X" })
  }

  render() {
    const { cellPosition } = this.props
    const { sign } = this.state

    const text = sign === '' ? cellPosition : sign

    return (
      <div className={`cell`} onClick={this.signCell}>
        {text}
      </div>
    )
  }
}
