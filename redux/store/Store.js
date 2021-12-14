import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from '../reducers/index'

const composeEnhancers = composeWithDevTools({
  name: 'products',
})

const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default Store
