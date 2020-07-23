import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserPicker extends Component {
  render() {
    return (
      <ul>
        {this.props.userNames.map((u) => (
          <li key={u}>
            {u}
          </li>
        ))}
      </ul>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userNames: Object.keys(users)
  }
}

export default connect(mapStateToProps)(UserPicker)