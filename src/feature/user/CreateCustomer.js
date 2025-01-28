import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { createUser } from './userSlice'

function CreateCustomer () {
  const [fullName, setfullName] = useState('')
  const [nationalId, setNationalId] = useState('')

  const dispatch = useDispatch()

  function handleClick () {
    if (!fullName || !nationalId) {
      return null
    }
    dispatch(createUser(fullName, nationalId))
  }

  return (
    <div>
      <h2 className='p-2 d-flex justify-content-center mb-4'>Create new customer</h2>
      <div className='inputs'>
        <div>
          <label className='mb-2'>Customer full name</label>
          <input
            className='form-control'
            value={fullName}
            onChange={e => setfullName(e.target.value)}
          />
        </div>
        <div>
          <label className='mb-2'>National ID</label>
          <input
            className='form-control'
            value={nationalId}
            onChange={e => setNationalId(e.target.value)}
          />
        </div>
        <button className='btn btn-success border-0' onClick={handleClick}>
          Create new customer
        </button>
      </div>
    </div>
  )
}

// export default connect(null, dispatch => ({ dispatch }))(CreateCustomer)

export default CreateCustomer
