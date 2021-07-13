import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Post(props) {
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: 0,
        from: "",
    })

    const { add } = props

    let history = useHistory()

    const textChange = (e) => {
        setTransaction({
            ...transaction,
            [e.target.id]: e.target.value,
        })

    }

    const numChange = (e) => {
        const amount = parseInt(e.target.value)
        setTransaction({
            ...transaction,
            amount: amount,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        add(transaction)
        history.push("/transactions")

    }




    return (
        <div>
            <h1>
                Add New Transaction
            </h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="Date">Date:</label>
                <input type="text" placeholder="Date" id="date" value={transaction.date} onChange={textChange} required />
                <label htmlFor="Name" >Name:</label>
                <input type="text" placeholder="Name" id="name" value={transaction.name} onChange={textChange} required />
                <label htmlFor="Amount">Amount:</label>
                <input type="number" placeholder="Amount" id="amount" value={transaction.amount} onChange={numChange} required />
                <label htmlFor="From">From:</label>
                <input type="text" placeholder="From" id="from" value={transaction.from} onChange={textChange} required />

                <button type="submit">Submit Changes</button>
            </form>

        </div>
    )
}

