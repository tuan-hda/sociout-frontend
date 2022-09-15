import * as types from '../actions/actionTypes'

const initialState = {
  user: null,
  loading: false,
  error: null,
  message: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case types.LOG_IN_START:
      return { ...state, loading: true, error: null }
    case types.LOG_IN_SUCCESS:
      return { ...state, loading: false, user: {}, error: null }
    case types.LOG_IN_FAIL:
      return {
        ...state,
        loading: false,
        error:
          action.payload.response?.status === 404
            ? {
                usernamePassword: {
                  message: 'Wrong username or password'
                }
              }
            : {
                error: {
                  message: 'Some errors have occurred'
                }
              }
      }

    // Set user
    case types.SET_USER:
      return { ...state, loading: false, user: action.payload, error: null }

    // Stop loading
    case types.CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        error: null
      }

    // Log out
    case types.LOG_OUT:
      return {
        ...state,
        loading: false,
        error: null,
        user: null
      }

    default:
      return state
  }
}

export default authReducer
