import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setCurrentUser } from '../actions/currentUser'
import { getInitialData } from '../utils/api'

const DEFAULT_USER = 'tylermcginnis'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setCurrentUser(DEFAULT_USER))
      })
  }
}