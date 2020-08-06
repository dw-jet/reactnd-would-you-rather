import React, {Component} from 'react'
import {connect} from 'react-redux'
import {formatDate} from '../utils/helpers'

class Poll extends Component {
  render() {
    const {question, answer} = this.props
    return (
      <div>
      <p>On {formatDate(question.timestamp)}{question.author} asked would you rather</p>
      <input type='radio'
        id='optionOne'
        name={`${question.id}pollChoice`}
        value='optionOne'
        checked={answer === 'optionOne'}
      />
      <label htmlFor='optionOne'>{question.optionOne.text}</label>
      <br />
      <input type='radio'
        id='optionTwo'
        name={`${question.id}pollChoice`}
        value='optionTwo'
        checked={answer === 'optionTwo'}
      />
      <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
      </div>
    )
  }
}

function mapStateToProps ({ users, questions, currentUser }, {id}) {
  const question = questions[id]
  const user = users[currentUser] ? users[currentUser] : {answers: ''}
  const answer = user.answers[id] ? user.answers[id] : ''

  return {
    currentUser,
    question: question ? question : null,
    answer,
  }
}

export default connect(mapStateToProps)(Poll)