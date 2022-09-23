import base from "./base"
import bearer from "./bearer"

const getMeService = () => {
  return new Promise((resolve, reject) => {
    base
      .get("/users", bearer())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export default getMeService
