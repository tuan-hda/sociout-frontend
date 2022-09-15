import base from './base'

const signUpService = (email, firstName, lastName, password) =>
  new Promise((resolve, reject) => {
    base
      .post(
        'users',
        {
          email,
          firstName,
          lastName,
          password
        }
      )
      .then(response => resolve(response))
      .catch(error => reject(error))
  })

export default signUpService
