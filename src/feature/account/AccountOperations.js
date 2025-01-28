import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit, payLoan, requestLoan, withdraw } from './AccountSlice'

function AccountOperations () {
  const [depositAmount, setDepositAmount] = useState('')
  const [withdrawalAmount, setWithdrawalAmount] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [loanPurpose, setLoanPurpose] = useState('')
  const [currency, setCurrency] = useState('USD')

  const dispatch = useDispatch()
  const {
    loan,
    loanPurpose: purpose,
    loading
  } = useSelector(state => state.account)

  function handleDeposit () {
    if (!depositAmount) return
    dispatch(deposit(depositAmount, currency))

    setDepositAmount('')
  }

  function handleWithdrawal () {
    if (!withdrawalAmount) return
    dispatch(withdraw(Number(withdrawalAmount)))
    setWithdrawalAmount(0)
  }

  function handleRequestLoan () {
    if (!loanAmount || !loanPurpose) return

    dispatch(requestLoan({ amount: loanAmount, purpose: loanPurpose }))

    setLoanAmount(0)
    setLoanPurpose('')
  }

  function handlePayLoan () {
    dispatch(payLoan())
  }

  return (
    <div>
      <h2 className='mb-5 d-flex justify-content-center'>
        Your account operations
      </h2>
      <div className='inputs'>
        <div className='d-flex '>
          <label className='me-4 fs-5'>Deposit</label>
          <input
            className='form-control w-75 me-4'
            type='number'
            value={depositAmount}
            onChange={e => setDepositAmount(+e.target.value)}
          />
          <select
            className='form-select w-25 me-4'
            value={currency}
            onChange={e => setCurrency(e.target.value)}
          >
            <option value='USD'>US Dollar</option>
            <option value='EUR'>Euro</option>
            <option value='GBP'>British Pound</option>
          </select>

          <button className='btn btn-primary' onClick={handleDeposit}>
            {!loading ? 'Deposit' : 'Loading..'}
            {depositAmount}
          </button>
        </div>

        <div className='d-flex '>
          <label className='me-4 fs-5'>Withdraw</label>
          <input
            className='form-control w-75 me-4'
            type='number'
            value={withdrawalAmount}
            onChange={e => setWithdrawalAmount(+e.target.value)}
          />
          <button className='btn btn-primary' onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div className='d-flex'>
          <label className='me-4 fs-5'>Request loan</label>
          <input
            className='form-control w-50 me-4'
            type='number'
            value={loanAmount}
            onChange={e => setLoanAmount(+e.target.value)}
            placeholder='Loan amount'
          />
          <input
            className='form-control w-25'
            value={loanPurpose}
            onChange={e => setLoanPurpose(e.target.value)}
            placeholder='Loan purpose'
          />
          <button
            className='btn btn-primary ms-4'
            onClick={handleRequestLoan}
            disabled={loan > 0}
          >
            Request loan
          </button>
        </div>
        {loan > 0 && (
          <div>
            <span className='p-1'>Pay back ${loan}</span>
            <b className='p-1'>{purpose}</b>
            <button className='btn btn-primary' onClick={handlePayLoan}>
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountOperations
