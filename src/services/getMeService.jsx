import base from './base'
import bearer from './bearer'

const getMeService = userId => {
  return new Promise((resolve, reject) => {
    base
      .post('/user', { userId }, bearer())
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}

export default getMeService
