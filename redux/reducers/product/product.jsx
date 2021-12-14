import * as Types from '../../actions/actionTypes'

const initialState = {
  isFetching: false,
  isLoading: false,
  error: false,
  products: [],
}

export const product = (state = initialState, action) => {
  switch (action.type) {
    case Types.PRODUCT_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case Types.PRODUCT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        products: action.payload,
      }
    case Types.PRODUCT_FAILED:
      return {
        ...state,
        isFetching: false,
        error: true,
      }
    default:
      return state
  }
}
