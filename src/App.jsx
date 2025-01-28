import Customer from './feature/user/Customer'
import AccountOperations from './feature/account/AccountOperations'
import BalanceDisplay from './feature/account/BalanceDisplay'
import CreateCustomer from './feature/user/CreateCustomer'
import { connect, useSelector } from 'react-redux'

function App () {
  const user = useSelector(state => state.user.fullName)

  return (
    <div>
      <h1 className='p-2 d-flex justify-content-center'>
        🏦 The React-Redux Bank ⚛️ {user}
      </h1>
      {}
      {user === '' ? (
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

// export default connect(state => ({ user: state.user }))(App)
export default App
