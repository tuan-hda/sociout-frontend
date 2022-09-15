import base from './base'

const logInService = (email, password) => {
  return new Promise((resolve, reject) => {
    base
      .post('login', { email, password })
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export default logInService
