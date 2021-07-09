import React from 'react'
import { Link } from "react-router-dom"


export default function index(props) {

    const { transactions } = props
    const listTransactions = transactions.map((elem, i) => {
        return (
            <>
                <li>
                    <span>{elem.date}</span>
                    <Link to={`/transactions/${i}`}> <span>{elem.name}</span></Link>
                    <span>{elem.amount}</span>
                </li>
                <hr/>
            </>
        )
    })

let sum = 0
transactions.forEach((elem) => {
    return sum += elem.amount
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
