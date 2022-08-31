import * as types from './actionTypes'

const setUserAction = user => {
  return {
    type: types.SET_USER,
    payload: user
  }
}

export default setUserAction
