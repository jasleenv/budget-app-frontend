import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../Util/apiUrl";


const API_BASE = apiUrl()


export default function Show(props) {
const [transaction, setTransaction] = useState([])
  let { index } = useParams()
  let history = useHistory()
  let { deleteTransaction} = props

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
        <div>
            <h1>
                Transaction Details
            </h1>
            <ul>
                <li>
                    <span>{transaction.date}</span>
                    <span>{transaction.amount}</span>
                    <span>{transaction.name}</span>
                </li>
                <hr/>
            </ul>
            <button onClick={handleDelete}>Delete</button>
            <Link to={`/transactions/${index}/edit`}>       <button>Edit</button>
            </Link>
            <Link to="/transactions">
            <button>Back</button>
            </Link>
        </div>
    )
}
