import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCell } from '../../../../../../redux/actions'

class Cell extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: 'empty'
    }
  }

  handleClass = () => {
    let className = ''

    switch (this.props.cycle) {
      case 0:
        // empty
        className = 'empty'
        break
      case 1:
        // alive
        className = 'alive'
        break
      case 2:
        // dead
        className = 'dead'
        break
      case 3:
        // born
        className = 'born'
        break
    
      default:
        break
    }

    return 'cell '+className
  }

  handleClick = (e) => {
    if (!this.props.lock) {
      this.props.changeCell(this.props.index)
    }
  }

  render() {
    return (
      <div 
        id={this.props.row + '-' + this.props.col}
        className={this.handleClass()}
        onClick={this.handleClick}
      > </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    lock: state.gol.lock
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    changeCell: cell => dispatch(changeCell(cell))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)