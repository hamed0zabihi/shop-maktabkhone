import * as Types from '../../actions/actionTypes'
import { generateToken } from '../../../components/Utils/token'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  message: '',
  error: false,
  user: {},
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case Types.LOGIN_SUCCESS:
      if (action.payload) {
        const token = generateToken(action.payload[0])
        localStorage.setItem('token', JSON.stringify(token))
      }
      return {
        ...state,
        isLoading: false,
        message: 'success',
        isLoggedIn: true,
        user: { ...action.payload[0] },
      }
    case Types.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: 'failed',
      }
    case Types.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case Types.REGISTER_SUCCESS:
      if (action.payload) {
        const token = generateToken(action.payload)
        localStorage.setItem('token', JSON.stringify(token))
      }
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        message: 'success',
        user: { ...action.payload },
      }
    case Types.REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: 'failed',
      }
    default:
      return state
  }
}
