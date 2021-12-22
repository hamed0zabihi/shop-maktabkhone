import { combineReducers } from 'redux'
import { FakeDataProducts } from '../../components/Product/FakeDataProducts'
import { cart } from './product/cart'
import { product, products } from './product/product'
import { user } from './user/user'

export const reducers = combineReducers({
  fakeData: FakeDataProducts,
  product: product,
  products: products,
  user: user,
  cart: cart,
})
