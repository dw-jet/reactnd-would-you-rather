import React, {Component} from 'react'
import {connect} from 'react-redux'
import Poll from './Poll'

class PollsList extends Component {
  render() {
    const {questionIds} = this.props
    console.log(this.props)
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

function mapStateToProps({questions}) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(PollsList)