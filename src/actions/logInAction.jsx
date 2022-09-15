import * as types from './actionTypes'
import { logInService } from '../services/index'

const logInStart = () => ({
  type: types.LOG_IN_START
})

const logInSuccess = () => ({
  type: types.LOG_IN_SUCCESS
})

const logInFail = error => ({
  type: types.LOG_IN_FAIL,
  payload: error
})

const logInAction = (email, password) => dispatch => {
  dispatch(logInStart())
  logInService(email, password)
    .then(response => {
      const token = response.data.token
      window.localStorage.setItem('token', token)
      dispatch(logInSuccess())
    })
    .catch(error => dispatch(logInFail(error)))
}

export default logInAction
