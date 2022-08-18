import base from './base'

const signUpService = (email, firstName, lastName, password) =>
  new Promise((resolve, reject) => {
    base
      .post(
        'user',
        {
          email,
          firstName,
          lastName,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(response => resolve(response))
      .catch(error => reject(error))
  })

export default signUpService
