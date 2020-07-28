import React, {Component} from 'react'
import {connect} from 'react-redux'
import Poll from './Poll'

class PollsList extends Component {
  render() {
    const {questionIds} = this.props
    return (
      <ul>
        {questionIds.map((id) => (
          <li key={id} className='options'>
            <Poll id={id} />
          </li>
        ))}
      </ul>
    )
  }
}

function filterAnswered(questions, answers) {
  return Object.keys(questions).filter(q => answers.includes(q))
}

function filterUnanswered(questions, answers) {
  return Object.keys(questions).filter(q => !answers.includes(q))
}

function mapStateToProps({currentUser, users, questions}) {
  const answers = currentUser ? Object.keys(users[currentUser].answers) : []
  const filtered = filterUnanswered(questions, answers)
  return {
    questionIds: filtered
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(PollsList)