import * as types from '../actions/actionTypes'

const initialState = {
  user: null,
  loading: false,
  error: null,
  message: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN_START:
      return { ...state, loading: true, error: null }
    case types.LOG_IN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null }
    case types.LOG_IN_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default authReducer
