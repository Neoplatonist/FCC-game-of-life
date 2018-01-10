import React, { Component } from 'react'

export default class Cell extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: 'empty'
    }
  }
  componentWillMount() {
    switch (this.props.type) {
      case 0:
        // empty
        this.setState({class: 'empty'})
        break
      case 1:
        // alive
        this.setState({class: 'alive'})
        break
      case 2:
        // dead
        this.setState({class: 'dead'})
        break
      case 3:
        // born

        this.setState({class: 'born'})
        break
    
      default:
        break
    }
  }

  render() {
    return (
      <div 
        id={this.props.row + '-' + this.props.col}
        className={'cell '+this.state.class}
      > </div>
    )
  }
}