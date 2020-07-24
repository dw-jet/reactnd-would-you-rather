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
    console.log(this.props)
    return (
        <button className='options' onClick={this.handleUserChoice}>
          <div>
            {id}
          </div>
        </button>
      )
    }
  }

export default connect()(User)