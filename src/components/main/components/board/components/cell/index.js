import React, { Component } from 'react'

export default class Cell extends Component {
  render() {
    return (
      <div 
        id={this.props.row + '-' + this.props.col}
        className="cell empty"
      > </div>
    )
  }
}