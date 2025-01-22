const initialUserState = {
  fullname: '',
  createdAt: '',
  nationlId: 0
}

function userReducer (state = initialUserState, action) {
  switch (action.type) {
    case 'user/createUser':
      return {
        fullname: action.payload.fullname,
        nationlId: action.payLoan.nationlId,
        createdAt: Date.toISOString()
      }
    default:
      return state
  }
}

function createUser () {
  return {
    type: 'user/createUser',
    payload: { fullname: user.name, nationlId: user.nationlId }
  }
}

const store = createStore(
  combineReducers({ accaunt: accauntReducer, user: userReducer })
)
console.log(store.getState())
