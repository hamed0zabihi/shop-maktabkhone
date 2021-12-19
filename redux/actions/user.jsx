import reduxCall from '../../components/Utils/reduxCall'

export const LOGIN_ACTION = (user) => {
  // mockAPI.io   does not have  authentication feature based on email and password
  // I use base64 to encrypt and decrypt emails and passwords
  // In a real project this way is terrible
  const uniqBase64 = btoa(user.email + user.password)
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: `https://61b749f564e4a10017d18a2e.mockapi.io/user?uniq=${uniqBase64}`,
      method: 'GET',
      name: 'LOGIN',
      body: user,
    })
  }
}

export const REGISTER_ACTION = (user) => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'https://61b749f564e4a10017d18a2e.mockapi.io/user',
      method: 'POST',
      name: 'REGISTER',
      body: user,
    })
  }
}

export const UPDATE_USER_ACTION = (user) => {
  const { id } = user
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: `http://restapi.adequateshop.com/api/users/${id}`,
      method: 'PUT',
      name: 'UPDATE_USER',
      body: JSON.stringify(user),
    })
  }
}
