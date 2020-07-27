import React, {Component} from 'react'
import { connect } from 'react-redux'
import {setCurrentUser} from '../actions/currentUser'

class User extends Component {
  handleUserChoice = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    dispatch(setCurrentUser(id))
  }

  render() {
    const { id } = this.props
    return (
      <li>
        <button className='options' onClick={this.handleUserChoice}>
          <div>
            {id}
          </div>
        </button>
      </li>
    )
  }
}

export default connect()(User)