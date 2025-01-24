const initialUserState = {
  fullname: '',
  createdAt: '',
  nationalId: ''
}

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'user/createUser': {
      return {
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
        createdAt: new Date().toISOString()
      }
    }
    default:
      return state
  }
}

export function createUser (fullname, nationalId) {
  return {
    type: 'user/createUser',
    payload: { fullname, nationalId }
  }
}
