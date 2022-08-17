import * as types from './actionTypes'
import { logInService } from '../services/index'

// LOGIN
const logInStart = () => ({
  type: types.LOG_IN_START
})

const logInSuccess = user => ({
  types: types.LOG_IN_SUCCESS,
  payload: user
})

const logInFail = error => ({
  type: types.LOG_IN_FAIL,
  payload: error
})

export const logInInitiate = (email, password) => dispatch => {
  dispatch(logInStart())
  logInService(email, password)
    .then(user => dispatch(logInSuccess(user)))
    .catch(err => dispatch(logInFail(err)))
}
