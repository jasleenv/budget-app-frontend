import React from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"

export default function navBar() {
    return (
        <div className="navbar" >
           <nav>
        <Link to="/transactions">
            <h1>Transactions</h1></Link>
        <Link to="/transactions/new">
            <button>Add A Transaction</button>
        </Link>
        </nav>
            
        </div>
    )
}
