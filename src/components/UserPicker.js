import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class UserPicker extends Component {
  render() {
    return (
      <div>
        {this.props.userNames.map((u) => (
          <User id={u} />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userNames: Object.keys(users)
  }
}

export default connect(mapStateToProps)(UserPicker)