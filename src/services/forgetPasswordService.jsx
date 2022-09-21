import base from "./base"

const forgetPasswordService = (email) => {
  return new Promise((resolve, reject) => {
    base
      .post("forget-password", {
        email,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export default forgetPasswordService
