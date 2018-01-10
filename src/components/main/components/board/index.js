import React, {Component} from 'react'
import Cell from './components/cell'
// import { connect } from 'react-redux'
// import { createCells } from '../../../../redux/actions'

export default class Board extends Component {
  renderCells() {
    return this.props.board.map((row, i) => {
      return row.map((col, j) => {
        return <Cell key={'cell-'+i+'-'+j} row={col[0]} col={col[1]}/>
      })
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

// const mapStateToProps = (state, props) => {
//   return {
//     board: state.gol.board,
//   }
// }

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     // createCells: (size) => {
//     //   dispatch(createCells(size))
//     // }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Board)