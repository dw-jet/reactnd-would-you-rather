import { 
  saveQuestion, 
  saveQuestionAnswer 
} from '../../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { currentUser } = getState()

    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .catch((e) => {
        console.warn('Error in handleAddQuestion: ', e)
        alert('Error adding question')
      })
  }
}

function answerQuestion({currentUser, qid, answer}) {
  return {
    type: ANSWER_QUESTION,
    qid,
    currentUser,
    answer,
  }
}

export function handleAnswerQuestion(data) {
  return (dispatch) => {
    dispatch(answerQuestion(data))
    return saveQuestionAnswer(data)
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e)
        alert('There was an error saving your answer')
      })
  }
}