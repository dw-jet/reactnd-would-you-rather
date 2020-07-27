import React, {Component} from 'react'
import { connect } from 'react-redux'
import PollsList from './PollsList'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Polls</h1>
        <label for ='unanswered'>Unanswered</label>
        <input type='radio' id='unanswered' name='answerFilter' value='unanswered' checked />
        <label for='answered'>Answered</label>
        <input type='radio' id='answered' name='answerFilter' value='answered' />

        <PollsList />
      </div>
    )
  }
}

export default connect()(Dashboard)