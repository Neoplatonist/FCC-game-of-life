import React, {Component} from 'react'
import Board from './components/board'
import Controls from './components/controls'

import { connect } from 'react-redux'
import { 
  // addGeneration, 
  createCells, 
  changeCell,
  randomizer, 
  updateCycles 
} from '../../redux/actions'

import { filter, neighbours } from './utils.js'

class Main extends Component {
  constructor (props) {
    super(props)

    this.row = 50
    this.col = 70
    // this.row = 30
    // this.col = 40
    this.timer = 0
  }

  componentDidMount() {
    this.random()
  }

  random = () => {
    this.props.randomizer(this.row, this.col)
  }

  clearBoard = (e) => {
    this.props.createCells(this.row, this.col)
  }

  rerender = () => {
    let cycles = this.props.cycles.slice()
    let dimensions = [this.row, this.col]

    for (let i = 0; i < this.props.board.length; i++) {
    // for (let i = 0; i < 120; i++) {
      // let i = 42
      let check = filter(this.props.board[i][0], this.props.board[i][1], dimensions)
      let count = neighbours(check, this.props.cycles)

      if (count < 2 && this.props.cycles[i] !== 0) {
        // die
        // console.log('less than 2...die')
        cycles[i] = 0
      } else if (count > 3 && this.props.cycles[i] !== 0) {
        // die
        // console.log('greater than 3...die')
        cycles[i] = 0
      } else if (count === 3 && this.props.cycles[i] === 0) {
        // born
        cycles[i] = 1
      }
    }

    // console.log('finished')
    this.props.updateCycles(cycles)
    // this.props.addGeneration()
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.rerender()
    }, 1000/this.props.fps)
  }

  stopTimer = () => {
    clearInterval(this.timer)
  }

  render() {
    return (
      <main>
        <h2 id="generations">Generations: #{this.props.generations}</h2>

        <Board board={this.props.board} cycles={this.props.cycles}/>

        <Controls 
          clear={this.clearBoard}
          gen={this.random} 
          locked={this.props.lock}
          step={this.rerender} 
          start={this.startTimer}
          stop={this.stopTimer}/>
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
    // addGeneration: () => dispatch(addGeneration()),
    changeCell: cell => dispatch(changeCell(cell)),
    createCells: (row, col) => dispatch(createCells(row, col)),
    randomizer: (row, col) => dispatch(randomizer(row, col)),
    updateCycles: cycles => dispatch(updateCycles(cycles))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)