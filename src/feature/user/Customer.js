import { connect } from 'react-redux'

function Customer ({ fullName }) {
  return <h2>👋 Welcome, {fullName} </h2>
}

export default connect(state => ({ fullName: state.user.fullname }))(Customer)
