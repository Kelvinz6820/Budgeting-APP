import React from 'react'
import Transaction from './Transaction'
import "./Transactions.css"

const Transactions = ({ transactions}) => {

    return (
        <div className="log">
            {transactions.map((transaction, id) => {
                return <Transaction key={id} transaction={transaction} index={id}/>
            })} 
        </div>
    )
}

export default Transactions;