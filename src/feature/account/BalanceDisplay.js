import { useSelector } from 'react-redux'

function formatCurrency (value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}

function BalanceDisplay () {
  const balance = useSelector(state => state.account.balance)

  return (
    <div
      style={{
        borderRadius: '4px',
        backgroundColor: '#f7f7f7',
        padding: '8px'
      }}
      className='balance'
    >
      {formatCurrency(balance)}
    </div>
  )
}

export default BalanceDisplay
