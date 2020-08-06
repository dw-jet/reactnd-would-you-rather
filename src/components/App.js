import React, {Component} from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import UserPicker from './UserPicker'
import Dashboard from './Dashboard'
import PollPage from './PollPage'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <div className='container'>
        <PollPage id='xj352vofupe1dqz9emx13r' />
      </div>
    )
  }
}

export default connect()(App)
