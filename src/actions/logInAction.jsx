import * as types from './actionTypes'
import { logInService } from '../services/index'

const logInStart = () => ({
  type: types.LOG_IN_START
})

const logInSuccess = user => ({
  type: types.LOG_IN_SUCCESS,
  payload: user
})

const logInFail = error => ({
  type: types.LOG_IN_FAIL,
  payload: error
})

const logInAction = (email, password) => dispatch => {
  dispatch(logInStart())
  logInService(email, password)
    .then(user => dispatch(logInSuccess(user)))
    .catch(err => dispatch(logInFail(err)))
}

export default logInAction
