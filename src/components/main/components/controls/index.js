import React, { Component } from 'react'
import { connect } from 'react-redux'
import { lock } from '../../../../redux/actions'
import { unlock } from '../../../../redux/actions'

class Controls extends Component {
  handleStart = (e) => {
    console.log("You clicked Start")
    this.props.lock()
    this.props.start()
  }

  handleStep = (e) => {
    console.log("You clicked Step")
    if (!this.props.locked) {
      this.props.step()
    }
  }

  handleStop = (e) => {
    console.log("You clicked Stop")
    this.props.unlock()
    this.props.stop()
  }

  handleClear = (e) => {
    console.log("You clicked Clear")
    this.props.unlock()
    this.props.clear()
  }

  handleGen = () => {
    this.props.gen()
  }

  render() {
    return (
      <section id="controls"> 
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStep}>Step</button>
        <button onClick={this.handleStop}>Stop</button>
        <button onClick={this.handleClear}>Clear</button>
        <button onClick={this.handleGen}>Generate</button>
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