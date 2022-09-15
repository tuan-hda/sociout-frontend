import * as types from './actionTypes'

const logOutAction = () => {
  localStorage.removeItem('token')
  return {
    type: types.LOG_OUT
  }
}

export default logOutAction
