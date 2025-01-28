import { createSlice } from '@reduxjs/toolkit'

const initialUserState = {
  fullName: '',
  createdAt: '',
  nationalId: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    createUser (state, action) {
      state.fullName = action.payload.fullName
      state.nationalId = action.payload.nationalId
      state.createdAt = new Date().toISOString()
    }
  }
})

export const { createUser } = userSlice.actions

export default userSlice.reducer
