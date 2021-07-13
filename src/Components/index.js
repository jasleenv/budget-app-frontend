import React from 'react'
import { Link } from "react-router-dom"


export default function Index(props) {

    const { transactions } = props
    const listTransactions = transactions.map((elem, i) => {
        return (
            <>
                <li>
                    <span>Date: {elem.date} </span>
                    <Link to={`/transactions/${i}`}> 
                    <span>Name: {elem.name} </span>
                    </Link>
                    <span>Amount: {elem.amount}</span>
                </li>
                
                <hr />
            </>
        )
    })

    let sum = 0
    transactions.forEach((elem) => {
        return (sum += parseInt(elem.amount))
    })



    return (
        <div>
            <h1>
                Bank Account Total: {sum}
            </h1>
            <ul>
                {listTransactions}
            </ul>
        </div>
    )
}
