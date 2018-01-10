import React, {Component} from 'react'
import Board from './components/board'
import Controls from './components/controls'

import { connect } from 'react-redux'
// import { changeCell } from '../../redux/actions'
import { createCells, changeCell, randomizer, updateCycles } from '../../redux/actions'

import { filter, neighbours } from './utils.js'

class Main extends Component {
  constructor (props) {
    super(props)

    // this.row = 50
    // this.col = 70
    this.row = 30
    this.col = 40
  }

  componentDidMount() {
    this.props.randomizer(this.row, this.col)
  }

  clearBoard = (e) => {
    this.props.createCells(this.row, this.col)
  }

  rerender = () => {
    let cycles = this.props.cycles.slice()

    // for (let i = 0; i < this.props.board.length; i++) {
    // for (let i = 0; i < 120; i++) {
      let i = 42
      let check = filter(this.props.board[i][0], this.props.board[i][1])
      console.log(check)
      let count = neighbours(check, cycles)

      if (count < 2 && cycles[i] !== 0) {
        // die
        console.log('less than 2...die')
        cycles[i] = 2
      } else if (count > 3 && cycles[i] !== 0) {
        // die
        console.log('greater than 3...die')
        cycles[i] = 2
      } else if (count === 3 && cycles[i] === 0) {
        // born
        cycles[i] = 3
      }
    // }

    console.log('finished')
    this.props.updateCycles(cycles)
  }

  render() {
    return (
      <main>
        <h2 id="generations">Generations: #{this.props.generations}</h2>

        <Board board={this.props.board} cycles={this.props.cycles}/>

        <Controls clear={this.clearBoard} step={this.rerender}/>
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    board: state.gol.board,
    cycles: state.gol.cycles,
    generations: state.gol.generations,
    lock: state.gol.lock
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    changeCell: cell => dispatch(changeCell(cell)),
    createCells: (row, col) => dispatch(createCells(row, col)),
    randomizer: (row, col) => dispatch(randomizer(row, col)),
    updateCycles: cycles => dispatch(updateCycles(cycles))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)