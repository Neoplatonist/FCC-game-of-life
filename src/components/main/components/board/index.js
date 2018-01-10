import React, {Component} from 'react'
import Cell from './components/cell'

export default class Board extends Component {
  renderCells = () => {
    return this.props.board.map((v, k) => {
      return (
        <Cell 
          key={'cell-'+k} 
          index={k}
          row={v[0]}
          col={v[1]}
          cycle={this.props.cycles[k]} />
      )
    })
  }

  render() {
    return (
      <div className="container-small">
        { this.renderCells() }
      </div>
    )
  }
}