import React, { Component } from 'react' 

export class Grid extends Component {
  render() {
    return (
      <div> 
        <div className={`grid-wrapper`}>I'm a grid</div>
        <div>
          <div className={`cell`}>1</div>
          <div className={`cell`}>2</div>
          <div className={`cell`}>3</div>
          <div className={`cell`}>4</div>
          <div className={`cell`}>5</div>
          <div className={`cell`}>6</div>
          <div className={`cell`}>7</div>
          <div className={`cell`}>8</div>
          <div className={`cell`}>9</div>
        </div>
      </div>
    )
  }
} 
