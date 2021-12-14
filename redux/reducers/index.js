import { combineReducers } from 'redux'
import { FakeDataProducts } from '../../components/Product/FakeDataProducts'
import { product } from './product/product'

export const reducers = combineReducers({
  fakeData: FakeDataProducts,
  products: product,
})
