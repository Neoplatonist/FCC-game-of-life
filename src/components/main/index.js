import React, {Component} from 'react'
import Board from './components/board'
import Controls from './components/controls'

import { connect } from 'react-redux'
import { createCells } from '../../redux/actions'

class Main extends Component {
  componentDidMount() {
    let row = 50
    let col = 70
    this.props.createCells(row, col)
  }

  render() {
    return (
      <main>
        <Board board={this.props.board}/>

        <Controls />
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    board: state.gol.board,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCells: (row, col) => {
      dispatch(createCells(row, col))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)