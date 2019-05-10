import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header className={`header bg-gold sans-serif w-100 ph3 pv3 pv4-ns ph4-m ph5-l`}>
        <h3 className="f2 f1-m f-headline-l measure-narrow lh-title mv0">
          <span className="bg-black-90 lh-copy white pa1 tracked-tight">
            Tic Tac Toe
          </span>
        </h3>
      </header>
    )
  }
}
