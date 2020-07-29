import React, {Component} from 'react'
import { connect } from 'react-redux'
import PollsList from './PollsList'

class Dashboard extends Component {
  state = {
    selectedOption: "unanswered"
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }

  filterAnswered(questions, answers) {
    return Object.keys(questions).filter(q => answers.includes(q))
  }
  
  filterUnanswered(questions, answers) {
    return Object.keys(questions).filter(q => !answers.includes(q))
  }

  render() {
    const selectedOption = this.state.selectedOption;
    return (
      <div>
        <h1>Polls</h1>
        <label htmlFor ='unanswered'>Unanswered</label>
        <input type='radio' 
          id='unanswered' 
          name='answerFilter' 
          value='unanswered'
          onChange={this.handleOptionChange} 
          checked={selectedOption === 'unanswered'} />
        <label htmlFor='answered'>Answered</label>
        <input type='radio' 
          id='answered' 
          name='answerFilter' 
          value='answered'
          onChange={this.handleOptionChange}
          checked={selectedOption === 'answered'} />

        <PollsList filter={ selectedOption==='answered' ? this.filterAnswered : this.filterUnanswered }   />
      </div>
    )
  }
}

export default connect()(Dashboard)