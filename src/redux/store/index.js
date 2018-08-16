import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import gol from '../reducers'


const middlewares = [thunk]

export default () => {
  return createStore(
    combineReducers({
      gol: gol
    }),
    applyMiddleware.apply(null, middlewares)
  )
}