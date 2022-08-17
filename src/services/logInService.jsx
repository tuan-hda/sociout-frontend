import base from './base'

const logInService = async (email, password) => {
  console.log({ email, password })
  return new Promise((resolve, reject) => {
    base
      .post('login', { email, password })
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export default logInService
