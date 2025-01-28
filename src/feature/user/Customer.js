import { connect } from 'react-redux'

function Customer ({ fullName }) {
  return <h2 className='p-2 d-flex justify-content-center mb-4'>👋 Welcome, {fullName} </h2>
}

export default connect(state => ({ fullName: state.user.fullName }))(Customer)
