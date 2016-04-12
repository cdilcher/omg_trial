import Immutable from 'immutable'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    Immutable.fromJS(initialState),
    applyMiddleware(thunk),
  )
}