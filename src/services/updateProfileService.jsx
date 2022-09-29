import base from "./base"
import bearer from "./bearer"

const updateProfileService = (data) => {
  const { dateOfBirth, ...rest } = data
  const newObj = { dayOfBirth: dateOfBirth, ...rest }
  return new Promise((resolve, reject) => {
    base
      .put("users/profile", newObj, bearer())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export default updateProfileService
