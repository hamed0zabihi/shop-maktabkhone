import reduxCall from '../../components/Utils/reduxCall'

export const LOGIN_ACTION = (user) => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'http://restapi.adequateshop.com/api/authaccount/login',
      method: 'POST',
      name: 'LOGIN',
      body: user,
    })
  }
}

export const REGISTER_ACTION = (user) => {
  console.log('userrrrrrrrrrrrrrrrrrrr', user)
  return async (dispatch) => {
    return reduxCall(dispatch, {
      url: 'http://restapi.adequateshop.com/api/authaccount/registration',
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
