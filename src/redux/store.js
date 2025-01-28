import { configureStore, Tuple } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import accountReducer from '../feature/account/AccountSlice'
import userReducer from './../feature/user/userSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    account: accountReducer,
    user: userReducer
  },
  middleware: () => new Tuple(thunk, logger)
})
