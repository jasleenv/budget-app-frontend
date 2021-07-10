import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from "axios"
import { apiUrl } from "../Util/apiUrl"
import "./Edit.css"


const API_BASE = apiUrl()

export default function Edit(props) {
    const [transaction, setTransaction] = useState({
        date: "",
        name: "",
        amount: "",
        from: "",
    })

    const { update } = props
    let { index } = useParams()
    let history = useHistory()

    const textChange = (e) => {
        setTransaction((state) => ({
            ...state,
            [e.target.id]: e.target.value,
        }));
    }

    const numChange = (e) => {
        setTransaction((state) => ({
            ...state,
            amount: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        update(index, transaction)
        history.push("/transactions")

    }

    useEffect(() => {
        axios.get(`${API_BASE}/transactions/${index}`).then((response) => {
            setTransaction(response.data)
        }).catch((error) => { history.push("/404") })
    }, [index, history])



    return (
        <div className="edit">
            <h1>
                Edit A Budget Transaction
            </h1>
            <form className="editForm" onSubmit={handleSubmit} >
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

