import React, {Component} from 'react'

export default class Controls extends Component {
  constructor(props) {
    super(props)

    this.handleStart = this.handleStart.bind(this)
    this.handleStep = this.handleStep.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleStart(e) {
    console.log("You clicked Start")
  }

  handleStep(e) {
    console.log("You clicked Step")
  }

  handleStop(e) {
    console.log("You clicked Stop")
  }

  handleClear(e) {
    console.log("You clicked Clear")
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