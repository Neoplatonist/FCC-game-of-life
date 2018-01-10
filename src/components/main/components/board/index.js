import React, {Component} from 'react'
import Cell from './components/cell'
// import { connect } from 'react-redux'
// import { createCells } from '../../../../redux/actions'

export default class Board extends Component {
  constructor(props) {
    super(props)

    this.renderCells = this.renderCells.bind(this)
  }

  renderCells() {
    // return this.props.board.map((row, i) => {
    //   return row.map((col, j) => {
    //     return <Cell 
    //             key={'cell-'+i+'-'+j} 
    //             row={col[0]} 
    //             col={col[1]}/>
    //   })
    // })

    // console.log(this.props.board)

    return this.props.board.map((v, k) => {
      return <Cell 
              key={'cell-'+k} 
              row={v.coords[0]}
              col={v.coords[1]}
              type={this.props.board[k].type} />
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