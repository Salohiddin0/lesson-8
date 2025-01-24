import Customer from './feature/user/Customer'
import AccountOperations from './feature/account/AccountOperations'
import BalanceDisplay from './feature/account/BalanceDisplay'
import CreateCustomer from './feature/user/CreateCustomer'
import { connect } from 'react-redux'
import { use } from 'react'

function App ({ user }) {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {}
      {user.fullname === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  )
}

export default connect(state => ({ user: state.user }))(App)
