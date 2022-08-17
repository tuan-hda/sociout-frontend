import base from './base'

const logInService = async (email, password) => {
  try {
    const result = await base.post('login', {
      email,
      password
    })
    return result.data
  } catch (err) {
    return err
  }
}

export default logInService
