import React from 'react'
import {Link} from 'react-router-dom'

export default function navBar() {
    return (
        <div>
           <nav>
        <Link to="/transactions">
            <h1>Transactions</h1></Link>
        <Link to="/transactions/new">
            <h1>Add A Transaction</h1>
        </Link>
        </nav>
            
        </div>
    )
}
