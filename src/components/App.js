import React, {Component} from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import UserPicker from './UserPicker'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <div className='container'>
        <h1>Identify yourself</h1>
          <UserPicker />
      </div>
    )
  }
}



export default connect()(App)
