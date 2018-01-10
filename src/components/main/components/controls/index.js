import React, { Component } from 'react'
import { connect } from 'react-redux'
import { lock } from '../../../../redux/actions'
import { unlock } from '../../../../redux/actions'

class Controls extends Component {
  handleStart = (e) => {
    console.log("You clicked Start")
    this.props.lock()
  }

  handleStep = (e) => {
    console.log("You clicked Step")
    this.props.step()
  }

  handleStop = (e) => {
    console.log("You clicked Stop")
    this.props.unlock()
  }

  handleClear = (e) => {
    console.log("You clicked Clear")
    this.props.unlock()
    this.props.clear()
  }

  render() {
    return (
      <section id="controls"> 
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStep}>Step</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleClear}>Clear</button>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    lock: () => dispatch(lock()),
    unlock: () => dispatch(unlock())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)