const initialAccountState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

export const accountReducer = (state = initialAccountState, action) => {
    switch (action.type) {
        case "account/deposit": {
            return {
                ...state,
                balance: state.balance + action.payload
            }
        }
        case "account/withdraw": {
            return {
                ...state,
                balance: state.balance - action.payload
            }
        }
        case "account/requestLoan": {
            return {
                ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount
            }
        }
        case "account/payLoan": {
            return { ...state, balance: state.balance - state.loan, loan: 0, loanPurpose: "" }
        }
        default:
            return state;
    }
}

export function depositAction(amount) {
    return {
        type: "account/deposit",
        payload: amount
    }
}

export function withdrawAction(amount) {
    return {
        type: "account/withdraw",
        payload: amount
    }
}

export function requestLoanAction(loan) {
    return {
        type: "account/requestLoan",
        payload: loan
    }
}

export function payLoanAction() {
    return {
        type: "account/payLoan",
    }
}