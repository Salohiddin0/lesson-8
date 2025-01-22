import { combineReducers } from 'redux'
import { accauntReducer } from './feature/account/accountSlice'

const store = createStore(
  combineReducers({ accaunt: accauntReducer, user: userReducer })
)
