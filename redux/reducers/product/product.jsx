import * as Types from '../../actions/actionTypes'

const initialState = {
  isLoading: false,
  error: false,
  product: [],
}
const initialStateAllProducts = {
  isFetching: false,
  isLoading: false,
  error: false,
  products: [],
}

export const products = (state = initialStateAllProducts, action) => {
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

export const product = (state = initialState, action) => {
  switch (action.type) {
    case Types.SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case Types.SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      }
    case Types.SINGLE_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      }

    default:
      return state
  }
}
