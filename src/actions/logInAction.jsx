import * as types from "./actionTypes"
import { getMeService, logInService } from "../services/index"
import jwtDecode from "jwt-decode"
import setUserAction from "./setUserAction"

const logInStart = () => ({
  type: types.LOG_IN_START,
})

const logInSuccess = () => ({
  type: types.LOG_IN_SUCCESS,
})

const logInFail = (error) => ({
  type: types.LOG_IN_FAIL,
  payload: error,
})

const logInAction = (email, password) => (dispatch) => {
  dispatch(logInStart())
  logInService(email, password)
    .then((response) => {
      const token = response.data.token
      window.localStorage.setItem("token", token)
      dispatch(logInSuccess())

      // Fetch data and set user
      const decodedObj = jwtDecode(token)
      getMeService(decodedObj.id)
        .then((response) =>
          dispatch(setUserAction({ ...decodedObj, ...response.data.data }))
        )
        .catch((error) => {
          console.log(
            "🚀 ~ file: logInAction.jsx ~ line 37 ~ .then ~ error",
            error
          )
        })
    })
    .catch((error) => dispatch(logInFail(error)))
}

export default logInAction
