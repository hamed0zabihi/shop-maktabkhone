import { combineReducers } from 'redux'
import { FakeDataProducts } from '../../components/Product/FakeDataProducts'
import { product } from './product/product'
import { user } from './user/user'

export const reducers = combineReducers({
  fakeData: FakeDataProducts,
  products: product,
  user: user,
})
