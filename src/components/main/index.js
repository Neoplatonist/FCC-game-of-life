import React, {Component} from 'react'
import { connect } from 'react-redux'

import { getHello } from '../../redux/actions'

class Main extends Component {
  componentDidMount() {
    this.props.getHello()
  }

  render() {
    return (
      <main>
        Game of Life

        <br/>
        <br/>
        <br/>

        {this.props.text}
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    text: state.gol.text,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getHello: () => {
      dispatch(getHello())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)