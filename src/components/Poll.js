import React, {Component} from 'react'
import {connect} from 'react-redux'

class Poll extends Component {
  render() {
    const {id} = this.props
    return (
      <p>{id}</p>
    )
  }
}

export default Poll