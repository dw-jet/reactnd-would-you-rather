import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserPicker extends Component {
  render() {
    console.log("Props")
    console.dir(this.props)
    return (
      <p>Welcome</p>
    )
  }
}

export default connect()(UserPicker)