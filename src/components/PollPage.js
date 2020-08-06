import React, { Component } from 'react'
import Poll from './Poll'
import { connect } from 'react-redux'

class PollPage extends Component {
  render() {
    const id = this.props.id
    return (
      <p>The id is {id}</p>
    )
  }
}
export default PollPage