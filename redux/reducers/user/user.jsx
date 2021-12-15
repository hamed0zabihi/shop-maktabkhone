import * as Types from '../../actions/actionTypes'

const initialState = {
  isLoading: false,
  message: '',
  codeStatus: '',
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
      if (action.payload.data?.Token && !action.payload.data?.codeStatus) {
        localStorage.setItem('token', JSON.stringify(action.payload.data.Token))
      }
      return {
        ...state,
        isLoading: false,
        codeStatus: action.payload.code,
        message: action.payload.message,
        user: { ...action.payload.data },
      }
    case Types.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    case Types.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case Types.REGISTER_SUCCESS:
      if (action.payload.data?.Token && !action.payload.data?.codeStatus) {
        localStorage.setItem('token', JSON.stringify(action.payload.data.Token))
      }
      return {
        ...state,
        isLoading: false,
        codeStatus: action.payload.code,
        message: action.payload.message,
        user: { ...action.payload.data },
      }
    case Types.REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    default:
      return state
  }
}
