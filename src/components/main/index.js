import React, {Component} from 'react'
import { connect } from 'react-redux'

// import Grid from './components/grid'
import Cell from './components/cell'

import { createCells } from '../../redux/actions'

class Main extends Component {
  componentDidMount() {
    let size = 400
    this.props.createCells(size)
  }

  renderCells() {
    return this.props.board.map((v, k) => {
      return <Cell key={'cell-'+k} />
    })
  }

  render() {
    return (
      <main>
        Game of Life

        <br/>
        <br/>
        <br/>

        <div className="container-small">
          { this.renderCells() }
        </div>
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
    createCells: (size) => {
      dispatch(createCells(size))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)