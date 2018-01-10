import React, {Component} from 'react'
import Board from './components/board'
import Controls from './components/controls'

import { connect } from 'react-redux'
import { createCells } from '../../redux/actions'
import { randomizer } from '../../redux/actions'

class Main extends Component {
  constructor (props) {
    super(props)

    this.row = 50
    this.col = 70
    this.total = this.row * this.col
  }
  componentDidMount() {
    this.props.randomizer(this.row, this.col)
  }

  render() {
    return (
      <main>
        <h2 id="generations">Generations: #{this.props.generations}</h2>

        <Board board={this.props.board} total={this.total}/>

        <Controls />
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    board: state.gol.board,
    generations: state.gol.generations,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCells: (row, col) => {
      dispatch(createCells(row, col))
    },

    randomizer: (row, col) => {
      dispatch(randomizer(row, col))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)