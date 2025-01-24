import { applyMiddleware, combineReducers, createStore } from 'redux'
import { userReducer } from '../feature/user/UserSlice'
import { accountReducer } from '../feature/account/AccountSlice'
import logger from 'redux-logger'

export const store = createStore(
  combineReducers({
    user: userReducer,
    account: accountReducer
  }),
  applyMiddleware(logger)
)
