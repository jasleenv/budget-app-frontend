import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../Util/apiUrl";
import "./Show.css"

const API_BASE = apiUrl()


export default function Show(props) {
    const [transaction, setTransaction] = useState([])
    let { index } = useParams()
    let history = useHistory()
    let { deleteTransaction } = props

    useEffect(() => {
        axios.get(`${API_BASE}/transactions/${index}`).then((response) => {
            setTransaction(response.data)
        }).catch((error) => { history.push("/404") })
    }, [index, history])

    const handleDelete = () => {
        deleteTransaction(index)
        history.push("/transactions")

    }
    return (
        <div className="show">
            <h1>
                Transaction Details
            </h1>
            <ul>
                <li className="list">
                    <span>Date: {transaction.date} </span>
                    <span>Amount: {transaction.amount} </span>
                    <span>Name: {transaction.name} </span>
                </li>
                <hr />
            </ul>
            <div className="button">
                <button onClick={handleDelete}>Delete</button>
                <Link to={`/transactions/${index}/edit`}>
                    <button>Edit</button>
                </Link>
                <Link to="/transactions">
                    <button>Back</button>
                </Link>
            </div>
        </div>
    )
}
