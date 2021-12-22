import * as types from './actionTypes'

const initialState = []

export const ADD_TO_CART_ACTION = (product = initialState, quantity = 1) => {
  return {
    type: types.ADD_TO_CART,
    payload: { ...product, quantity: quantity },
  }
}

export const REMOVE_FROM_CART_ACTION = (id = initialState) => {
  return { type: types.REMOVE_FROM_CART, payload: id }
}

export const CLEAR_CART_ACTION = () => {
  return { type: types.CLEAR_CART, payload: [] }
}
