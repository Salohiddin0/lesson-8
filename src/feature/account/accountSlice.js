import { createSlice } from '@reduxjs/toolkit'

const initialAccountState = {
  balance: 1,
  loan: 0,
  loanPurpose: '',
  loading: false
}

const accountReducer = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload
      state.loading = false
    },
    withdraw: (state, action) => {
      state.balance -= action.payload
    },
    requestLoan: (state, action) => {
      state.loan = action.payload.amount
      state.loanPurpose = action.payload.purpose
      state.balance += action.payload.amount
    },
    payLoan: (state, action) => {
      state.balance -= state.loan
      state.loan = 0
      state.loanPurpose = ''
    },
    loading: (state, action) => {
      state.loading = true
    }
  }
})

export default accountReducer.reducer
export const { deposit, withdraw, requestLoan, payLoan, loading } =
  accountReducer.actions
