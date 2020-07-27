import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'

class Poll extends Component {
  render() {
    const {question} = this.props
    return (
    <p>On {formatDate(question.timestamp)}{question.author} asked ...</p>
    )
  }
}

function mapStateToProps ({ users, questions, currentUser }, {id}) {
  const question = questions[id]

  return {
    currentUser,
    question: question ? question : null
  }
}

export default connect(mapStateToProps)(Poll)