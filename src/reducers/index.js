import authReducer from './authReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  user: authReducer
})

export default allReducers
