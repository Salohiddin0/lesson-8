const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: ''
}
export const accauntReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'accaunt/deposit':
      return { ...state, balance: state.balance + action.payload }
    case 'accaunt/withdraw':
      return { ...state, balance: state.balance - action.payload }
    case 'accaunt/requestLoan':
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount
      }
    case 'accaunt/payLoan':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: ''
      }

    default:
      return state
  }
}

function depositAction (param) {
  return { type: 'accaunt/deposit', payload: param }
}

function withdrawAction (param) {
  return { type: 'accaunt/withdraw', payload: param }
}

function requestLoan (param) {
  return { type: 'accaunt/requestLoan', payload: param }
}

function payLoan (param) {
  return { type: 'accaunt/payLoan', payload: param }
}
